import * as d3 from 'd3'
import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

/**
 * Spider component
 * @author Michel Brousse
 * @component
 */
const Spider = ({ perfs }) => {
  const svgRef = useRef(null)
  const width = 258
  const height = 263

  /**
   * Draws a polygon from the center of the radar.
   * @param {object} dataset
   * @param {SVGElement} parent
   * @param {number} scale
   * @param {number} size
   */
  const drawData = (dataset, parent, scale, size) => {
    const points = []
    const sideNumber = 6
    const center = {
      x: size / 2,
      y: size / 2,
    }

    dataset.forEach((d, i) => {
      const len = scale(d.value)
      const theta = i * ((2 * Math.PI) / sideNumber)
      const point = {
        x: center.x + len * Math.sin(Math.PI - theta),
        y: center.y + len * Math.cos(Math.PI - theta),
      }

      points.push({
        ...point,
        value: d.value,
      })
    })

    const lineGenerator = d3
      .line()
      .x((d) => d.x)
      .y((d) => d.y)

    parent
      .append('path')
      .attr('d', lineGenerator([...points, points[0]]))
      .attr('fill', '#FF0101B2')
  }

  useEffect(() => {
    d3.select(svgRef.current).selectAll('*').remove()

    const svg = d3.select(svgRef.current).append('g').classed('container', true)

    svg.attr(
      'transform',
      `translate(${width / 2 - 155 / 2 - 12.5}, ${height / 2 - 179 / 2})`
    )

    svg
      .append('path')
      .attr(
        'd',
        'M32.5433 56.0387L90.5 22.5774L148.457 56.0387V122.961L90.5 156.423L32.5433 122.961V56.0387Z'
      )
      .attr('fill', 'none')
      .attr('stroke', 'white')

    svg
      .append('path')
      .attr(
        'd',
        'M51.5289 67.7887L90 45.5774L128.471 67.7887V112.211L90 134.423L51.5289 112.211V67.7887Z'
      )
      .attr('fill', 'none')
      .attr('stroke', 'white')
    svg
      .append('path')
      .attr(
        'd',
        'M71.5144 78.5387L90.5 67.5774L109.486 78.5387V100.461L90.5 111.423L71.5144 100.461V78.5387Z'
      )
      .attr('fill', 'none')
      .attr('stroke', 'white')
    svg
      .append('path')
      .attr(
        'd',
        'M81.0072 84.9137L90.25 79.5774L99.4927 84.9137V95.5863L90.25 100.923L81.0072 95.5863V84.9137Z'
      )
      .attr('fill', 'none')
      .attr('stroke', 'white')

    svg
      .append('g')
      .attr('id', 'chart')
      .append('path')
      .attr(
        'd',
        'M12.5577 45.2887L90 0.57735L167.442 45.2887V134.711L90 179.423L12.5577 134.711V45.2887Z'
      )
      .attr('fill', 'none')
      .attr('stroke', 'white')

    const legend = svg.append('g').classed('legend', true)

    legend
      .append('text')
      .attr('x', 65)
      .attr('y', -12)
      .text('Intensité')
      .style('font-size', '12px')
      .style('fill', '#FFFFFF')

    legend
      .append('text')
      .attr('x', 60)
      .attr('y', 200)
      .text('Endurance')
      .style('font-size', '12px')
      .style('fill', '#FFFFFF')

    legend
      .append('text')
      .attr('x', -33)
      .attr('y', 47)
      .text('Cardio')
      .style('font-size', '12px')
      .style('fill', '#FFFFFF')

    legend
      .append('text')
      .attr('x', 174)
      .attr('y', 47)
      .text('Vitesse')
      .style('font-size', '12px')
      .style('fill', '#FFFFFF')

    legend
      .append('text')
      .attr('x', 174)
      .attr('y', 145)
      .text('Force')
      .style('font-size', '12px')
      .style('fill', '#FFFFFF')

    legend
      .append('text')
      .attr('x', -33)
      .attr('y', 145)
      .text('Energie')
      .style('font-size', '12px')
      .style('fill', '#FFFFFF')

    const chart = svg.select('#chart').append('g')

    const size = document.querySelector('#chart').getBoundingClientRect().height

    const scale = d3
      .scaleLinear()
      .domain([0, d3.max(perfs, (d) => d.value) * 1.1])
      .range([0, size / 2])

    drawData(perfs.reverse(), chart, scale, size)
  }, [perfs])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      style={{ background: '#282D30', borderRadius: '5px' }}
      className="chartgroup"
    />
  )
}

Spider.propTypes = {
  perfs: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      kind: PropTypes.number,
    })
  ),
}

export default Spider
