import * as d3 from 'd3'
import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const Radial = ({ score }) => {
  const svgRef = useRef(null)
  const width = 258
  const height = 263

  useEffect(() => {
    d3.select(svgRef.current).selectAll('*').remove()

    const svg = d3.select(svgRef.current)
    /* Converting data score to radiant. */
    const dataScoreToRadiant = (d) => (d * 100 * 6.28319) / 100

    let arc = d3
      .arc()
      .innerRadius(81)
      .outerRadius(89)
      .cornerRadius(4)
      .startAngle(0)
      .endAngle(-dataScoreToRadiant(score))

    svg
      .append('path')
      .attr('d', arc)
      .attr('transform', `translate(${width / 2},${height / 2})`)
      .attr('fill', '#FF0000')

    svg
      .append('circle')
      .attr('r', '80')
      .attr('cx', width / 2)
      .attr('cy', height / 2)
      .attr('fill', '#FFFFFF')

    svg
      .append('svg:text')
      .attr('x', width / 2)
      .attr('y', height / 2 - 5)
      .style('font-size', '26px')
      .style('font-weight', 'bold')
      .style('text-anchor', 'middle')
      .attr('class', 'd3')
      .text(score * 100 + '%')

    svg
      .append('svg:text')
      .attr('x', width / 2)
      .attr('y', height / 2 + 20)
      .style('font-size', '16px')
      .style('font-weight', 500)
      .style('fill', '#9B9EAC')
      .style('text-anchor', 'middle')
      .attr('class', 'd3')
      .text('de votre')

    svg
      .append('svg:text')
      .attr('x', width / 2)
      .attr('y', height / 2 + 45)
      .style('font-size', '16px')
      .style('font-weight', 500)
      .style('fill', '#9B9EAC')
      .style('text-anchor', 'middle')
      .attr('class', 'd3')
      .text('objectif')
  }, [score])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      style={{ background: '#FBFBFB', borderRadius: '5px' }}
      className="chartgroup"
    />
  )
}

Radial.propTypes = {
  score: PropTypes.number,
}

Radial.defaultProps = {
  score: 0,
}

export default Radial
