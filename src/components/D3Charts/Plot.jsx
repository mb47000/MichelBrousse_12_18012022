import * as d3 from 'd3'
import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const Plot = ({ activityData }) => {
  /**
   * Create an array of numbers from 1 to the length of the data array
   * @returns An array of numbers from 1 to the length of the data array.
   */
  const xDomain = (data) => {
    const arr = []
    for (let i = 1; i <= data.length; i++) {
      arr.push(i)
    }
    return arr
  }

  const svgRef = useRef(null)
  const dimensions = {
    width: 835,
    height: 320,
  }
  const { width, height } = dimensions

  const graphWidth = 702
  const graphHeight = 143

  useEffect(() => {
    const xScale = d3
      .scaleBand()
      .domain(xDomain(activityData))
      .range([0, graphWidth])

    const yScale = d3
      .scaleLinear()
      .domain([
        d3.min(activityData, (d) => d.kilogram - 1),
        d3.max(activityData, (d) => d.kilogram + 1),
      ])
      .range([graphHeight, 0])

    const yScaleCalories = d3
      .scaleLinear()
      .domain([0, d3.max(activityData, (d) => d.calories) * 1.1])
      .range([graphHeight, 0])

    const subgroups = ['kilogram', 'calories']

    const xSubgroup = d3
      .scaleBand()
      .domain(subgroups)
      .range([0, xScale.bandwidth()])
      .padding(3)

    const color = d3
      .scaleOrdinal()
      .domain(subgroups)
      .range(['#282D30', '#E60000'])

    const svg = d3.select(svgRef.current)

    svg.selectAll('*').remove() // Clear svg content before adding new elements

    svg
      .append('circle')
      .attr('cx', 532)
      .attr('cy', 34)
      .attr('r', 4)
      .style('fill', '#282D30')
    svg
      .append('text')
      .attr('x', 542)
      .attr('y', 34)
      .text('Poids (kg)')
      .style('font-size', '14px')
      .attr('alignment-baseline', 'middle')
      .style('fill', '#74798C')
    svg
      .append('circle')
      .attr('cx', 646)
      .attr('cy', 34)
      .attr('r', 4)
      .style('fill', '#E60000')
    svg
      .append('text')
      .attr('x', 656)
      .attr('y', 34)
      .text('Calories brûlées (kCal)')
      .style('font-size', '14px')
      .attr('alignment-baseline', 'middle')
      .style('fill', '#74798C')
    svg
      .append('text')
      .attr('x', 32)
      .attr('y', 34)
      .text('Activité quotidienne')
      .style('font-size', '15px')
      .attr('alignment-baseline', 'middle')
      .style('fill', '#20253A')

    const svgEl = d3
      .select(svgRef.current)
      .append('g')
      .attr('transform', `translate(43, 112.5)`)

    svgEl
      .append('g')
      .classed('ticks-xgroup', true)
      .attr('transform', `translate(0, ${graphHeight})`)
      .call(d3.axisBottom(xScale).tickSize(0))
      .select('.domain')
      .style('color', '#DEDEDE')

    svgEl
      .selectAll('.ticks-xgroup text')
      .style('color', '#9B9EAC')
      .style('font-size', '14px')
      .style('font-family', 'Roboto')
      .style('font-weight', '500')
      .attr('transform', 'translate(0, 18)')

    svgEl
      .append('g')
      .classed('ticks-ygroup', true)
      .attr('transform', `translate(${graphWidth}, 0)`)
      .style('stroke-dasharray', '2')
      .style('color', '#DEDEDE')
      .call(d3.axisRight(yScale).ticks(3).tickSizeInner(-graphWidth))
      .selectAll('g text')
      .style('color', '#9B9EAC')
      .style('font-size', '14px')
      .style('font-family', 'Roboto')
      .style('font-weight', '500')
      .attr('transform', 'translate(45, 0)')

    svgEl.select('.ticks-ygroup .domain').remove()

    svgEl
      .append('g')
      .attr('id', 'graph')
      .selectAll('g')
      .data(activityData)
      .join('g')
      .attr('transform', function (d, i) {
        return 'translate(' + xScale(i + 1) + ',0)'
      })
      .selectAll('path')
      .data(function (d) {
        return subgroups.map(function (key) {
          return { key: key, value: d[key] }
        })
      })
      .join('path')
      .attr('d', (d) => {
        const yValue =
          d.key === 'kilogram' ? yScale(d.value) : yScaleCalories(d.value)
        const xValue =
          d.key === 'kilogram' ? xSubgroup(d.key) - 0.5 : xSubgroup(d.key) + 0.5
        let rx = 4
        let ry = 4
        return `
        M${xValue - 3},${yValue + ry}
        a${rx},${ry} 0 0 1 ${rx},${-ry}
        h${8 - 2 * rx}
        a${rx},${ry} 0 0 1 ${rx},${ry}
        v${graphHeight - yValue - ry}
        h${-8}Z
      `
      })
      .attr('fill', (d) => color(d.key))

    const graph = svgEl.select('#graph')

    graph
      .selectAll('hover')
      .data(activityData)
      .enter()
      .append('rect')
      .attr('id', (d) => `group-${d.day}`)
      .attr('fill-opacity', 0)
      .attr('width', graphWidth / activityData.length)
      .attr('x', (d, i) => (graphWidth / activityData.length) * i)
      .attr('height', graphHeight + 1)

    graph
      .selectAll('tooltip')
      .data(activityData)
      .enter()
      .append('rect')
      .attr('id', (d) => `tooltip-${d.day}`)
      .attr('class', 'tooltip')
      .style('fill', '#E60000')
      .attr('width', 39)
      .attr('height', 63)
      .attr('x', (d, i) =>
        i < activityData.length - 1
          ? (graphWidth / activityData.length) * i + 107
          : (graphWidth / activityData.length) * i - 45
      )
      .attr('y', -31.5)
      .attr('fill-opacity', 0)

    graph
      .selectAll('text')
      .data(activityData)
      .enter()
      .append('text')
      .attr('class', (d) => `tooltiptext-${d.day}`)
      .attr('x', (d, i) =>
        i < activityData.length - 1
          ? (graphWidth / activityData.length) * i + 119
          : (graphWidth / activityData.length) * i - 33
      )
      .attr('y', -15)
      .style('font-size', '7px')
      .style('fill', 'white')
      .text((d) => d.kilogram + 'kg')
      .attr('fill-opacity', 0)

    graph
      .selectAll('text2')
      .data(activityData)
      .enter()
      .append('text')
      .attr('class', (d) => `tooltiptext-${d.day}`)
      .attr('x', (d, i) =>
        i < activityData.length - 1
          ? (graphWidth / activityData.length) * i + 114
          : (graphWidth / activityData.length) * i - 38
      )
      .attr('y', +15)
      .style('font-size', '7px')
      .style('fill', 'white')
      .text((d) => d.calories + 'Kcal')
      .attr('fill-opacity', 0)

    svg
      .selectAll('rect')
      .on('mouseover', function (e, d) {
        svg.select(`#group-${d.day}`).transition().attr('fill-opacity', 0.1)

        svg.select(`#tooltip-${d.day}`).transition().attr('fill-opacity', 1)

        svg
          .selectAll(`.tooltiptext-${d.day}`)
          .transition()
          .attr('fill-opacity', 1)
      })

      .on('mouseout', function (e, d) {
        svg.select(`#group-${d.day}`).transition().attr('fill-opacity', 0)
        svg.select(`#tooltip-${d.day}`).transition().attr('fill-opacity', 0)
        svg
          .selectAll(`.tooltiptext-${d.day}`)
          .transition()
          .attr('fill-opacity', 0)
      })
  }, [])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      style={{ background: '#FBFBFB', borderRadius: '5px' }}
    />
  )
}

Plot.propTypes = {
  activityData: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      kilogram: PropTypes.number,
      calories: PropTypes.number,
    })
  ),
}

export default Plot
