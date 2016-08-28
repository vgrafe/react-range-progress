import React, { PropTypes } from 'react'

const Range = props => {
  const val = props.value
  const min = props.min
  const max = props.max

  const percentProgress = val / (max - min)

  const componentHeight = Math.max(props.height, props.thumbSize)

  const trackPosition = {
    top: (props.thumbSize - Math.min(props.height, props.thumbSize)) / 2,
    height: props.height + 'px'
  }

  return <div
           className='slidershell'
           style={{
             height: componentHeight + 'px'
           }}>
           <style dangerouslySetInnerHTML={{
             __html:
               `
               .slider {
                 position:absolute;
                 left:0px;
                 top:0px;
                 overflow:visible;
                 z-index:100;
               }

               .slidershell {
                 border:0 none;
                 position:relative;
                 left:0px;
                 top:0px;
                 overflow:visible;
               }

               .slidertrack {
                 border:0;
                 position:absolute;
                 background:rgba(254, 254, 254, 0.6);
               }

               .sliderfill {
                 border:0;
               	position:absolute;
                 pointer-events:none;
               }

               .sliderthumb {
               	position:absolute;
                 left:0px;
                 top:0px;
                 border:0 none;

               	padding:0px;
                 margin:0px;
                 text-align:center;

               	pointer-events:none;
               }

               input[type=range]::-ms-track {
                 width:100%;
                 height:100%;

                 -webkit-appearance:none;
                 margin:0px;
                 padding:0px;
                 border:0 none;

                 background:transparent;
                 color:transparent;
                 overflow:visible;
               }

               input[type=range]::-moz-range-track {
                 width:100%;
                 height:100%;

                 -moz-appearance:none;
                 margin:0px;
                 padding:0px;
                 border:0 none;

                 background:transparent;
                 color:transparent;
                 overflow:visible;
               }

               input[type=range] {
                 cursor: pointer;

                 -webkit-appearance:none;
                 padding:0px;
                 border:0 none;

                 background:transparent;
                 color:transparent;
                 overflow:visible;
               }

               input[type=range]:focus::-webkit-slider-runnable-track {
                 background:transparent;
                 border:transparent;
               }

               input[type=range]:focus {
                 outline: none;
               }

               input[type=range]::-ms-thumb {
                 width:12px;
                 height:12px;

                 border-radius:0px;
                 border:0 none;
                 background:transparent;
               }
               input[type=range]::-moz-range-thumb {
                 width:12px;
                 height:12px;

                 border-radius:0px;
                 border:0 none;
                 background:transparent;
               }
               input[type=range]::-webkit-slider-thumb {
                 width:12px;
                 height:12px;

                 border-radius:0px;
                 border:0 none;
                 background:transparent;
                 -webkit-appearance:none;
               }

               input[type=range]::-ms-fill-lower {
                 background:transparent;
                 border:0 none;
               }
               input[type=range]::-ms-fill-upper {
                 background:transparent;
                 border:0 none;
               }
               input[type=range]::-ms-tooltip {
                  display: none;
               }`
             }}>
            </style>
           <div
             className='slidertrack'
             style={{
               borderRadius: props.height + 'px',
               width: `100%`,
               ...trackPosition
             }}></div>
           <div
             className='sliderfill'
             style={{
               borderRadius: props.height + 'px',
               background: props.color,
               width: `calc(100% * ${percentProgress} + ${(1 - percentProgress) * componentHeight}px)`,
               ...trackPosition
             }}></div>
             {props.hideThumb ? null
             : <div
                className='sliderthumb'
                style={{
                  width: componentHeight,
                  height: componentHeight + 'px',
                  borderRadius: componentHeight + 'px',
                  background: props.thumbColor || props.color,
                  boxShadow: '0 0 3px black',
                  left: `calc((100% - ${componentHeight}px) * ${percentProgress})` }}>
                </div>}
           <input
             style={{
               ...trackPosition,
               width: 'calc(100% - ' + componentHeight + 'px)',
               marginLeft: componentHeight / 2,
               marginRight: componentHeight / 2,
               top: 0,
               height: componentHeight,
               WebkitAppearance: 'none',
               background: 'transparent',
             }}
             className='slider'
             type='range'
             onChange={props.onChange}
             min={min}
             max={max} />
         </div>
}

Range.defaultProps = {
  color: '#eee',
  thumbSize: 12,
  height: 6,
  min: 0,
  max: 100
}

Range.propTypes = {
  color: PropTypes.string,
  thumbColor: PropTypes.string,
  hideThumb: PropTypes.bool,
  height: PropTypes.number,
  thumbSize: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
}

export default Range
