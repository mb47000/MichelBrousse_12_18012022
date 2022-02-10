import * as d3 from 'd3'
import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const Linear = ({ sessionsData }) => {
  const svgRef = useRef(null)

  const width = 258
  const height = 263

  const graphHeight = 120

  useEffect(() => {
    const formatSessionsData = [
      ...sessionsData,
      {
        day: 'end',
        sessionLength: 0,
      },
    ]
    const day = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

    const svg = d3.select(svgRef.current)

    const xScale = d3
      .scaleBand()
      .domain(formatSessionsData)
      .range([0, width + 38])

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(formatSessionsData, (d) => d.sessionLength)])
      .range([graphHeight, 0])

    svg.selectAll('*').remove()

    svg
      .append('text')
      .attr('x', 34)
      .attr('y', 34)
      .text(`Durée moyenne des`)
      .style('font-size', '15px')
      .attr('alignment-baseline', 'middle')
      .style('fill', '#FF8484')
    svg
      .append('text')
      .attr('x', 34)
      .attr('y', 55)
      .text(`sessions`)
      .style('font-size', '15px')
      .attr('alignment-baseline', 'middle')
      .style('fill', '#FF8484')

    svg
      .selectAll('dot')
      .data(formatSessionsData)
      .enter()
      .append('circle')
      .attr('id', (d, i) => `circleb-${i}`)
      .attr('r', 8)
      .style('fill', '#FFFFFF')
      .attr('fill-opacity', 0)
      .attr('cx', function (d) {
        return xScale(d)
      })
      .attr('cy', function (d) {
        return yScale(d.sessionLength) + 85
      })

    svg
      .append('path')
      .datum(formatSessionsData)
      .attr('class', 'line')
      .attr('fill', 'none')
      .style('stroke', '#FF8484')
      .style('stroke-width', '3')
      .attr('id', 'tag')
      .attr(
        'd',
        d3
          .line()
          .curve(d3.curveCardinal)
          .x(function (d) {
            return xScale(d)
          })
          .y(function (d) {
            return yScale(d.sessionLength) + 85
          })
      )

    svg
      .selectAll('.hover')
      .data(formatSessionsData)
      .enter()
      .append('g')
      .append('rect')
      .attr('id', (d, i) => `group-${i}`)
      .attr('fill-opacity', 0)
      .attr('width', (d, i) => width / 7)
      .attr('x', (d, i) => (width / 7) * i)
      .attr('height', height)

    svg
      .selectAll('tooltip')
      .data(formatSessionsData)
      .enter()
      .append('rect')
      .attr('id', (d, i) => `tooltip-${i}`)
      .style('fill', '#FFFFFF')
      .attr('width', 39)
      .attr('height', 25)
      .attr('x', (d) => (d.day === 7 ? xScale(d) - 42 : xScale(d) + 5))
      .attr('y', function (d) {
        return yScale(d.sessionLength) + 50
      })
      .attr('fill-opacity', 0)

    svg
      .selectAll('tooltiptext')
      .data(formatSessionsData)
      .enter()
      .append('text')
      .attr('id', (d, i) => `tooltiptext-${i}`)
      .attr('x', (d) => (d.day === 7 ? xScale(d) - 35 : xScale(d) + 12))
      .attr('y', function (d) {
        return yScale(d.sessionLength) + 65
      })
      .text((d) => `${d.sessionLength} min`)
      .style('font-size', '8px')
      .style('fill', 'black')
      .attr('fill-opacity', 0)

    svg
      .selectAll('dot')
      .data(formatSessionsData)
      .enter()
      .append('circle')
      .attr('id', (d, i) => `circle-${i}`)
      .attr('r', 4)
      .style('fill', '#FFFFFF')
      .attr('fill-opacity', 0)
      .attr('cx', function (d) {
        return xScale(d)
      })
      .attr('cy', function (d) {
        return yScale(d.sessionLength) + 85
      })

    svg
      .selectAll('g')
      .data(formatSessionsData)
      .append('text')
      .attr('x', (d, i) => (width / 7) * i + 15)
      .attr('y', height - 25)
      .text((d, i) => day[i])
      .style('font-size', '12px')
      .attr('alignment-baseline', 'middle')
      .style('fill', '#FF8484')

    svg
      .selectAll('g')
      .on('mouseover', function (e, d) {
        let groupSelection = `#group-${d.day - 1}`
        for (let i = d.day; i < formatSessionsData.length; i++) {
          groupSelection += `,#group-${i}`
        }

        svg.selectAll(groupSelection).transition().attr('fill-opacity', 0.1)

        svg
          .select(`#circle-${d.day - 1}`)
          .transition()
          .attr('fill-opacity', 1)

        svg
          .select(`#circleb-${d.day - 1}`)
          .transition()
          .attr('fill-opacity', 0.3)

        svg
          .select(`#tooltiptext-${d.day - 1}`)
          .transition()
          .attr('fill-opacity', 1)

        svg
          .select(`#tooltip-${d.day - 1}`)
          .transition()
          .attr('fill-opacity', 1)
      })

      .on('mouseout', function (e, d) {
        let groupSelection = `#group-${d.day - 1}`

        for (let i = d.day; i < formatSessionsData.length; i++) {
          groupSelection += `,#group-${i}`
        }

        svg.selectAll(groupSelection).transition().attr('fill-opacity', 0)

        svg
          .select(`#circle-${d.day - 1}`)
          .transition()
          .attr('fill-opacity', 0)

        svg
          .select(`#circleb-${d.day - 1}`)
          .transition()
          .attr('fill-opacity', 0)

        svg
          .select(`#tooltiptext-${d.day - 1}`)
          .transition()
          .attr('fill-opacity', 0)

        svg
          .select(`#tooltip-${d.day - 1}`)
          .transition()
          .attr('fill-opacity', 0)
      })
  }, [])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      style={{ background: '#FF0000', borderRadius: '5px' }}
      className="chartgroup"
    />
  )
}

Linear.propTypes = {
  sessionsData: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number,
      sessionLength: PropTypes.number,
    })
  ),
}

export default Linear
