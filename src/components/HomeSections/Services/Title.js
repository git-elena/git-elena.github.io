import React from 'react'
// import '../css/ServiceTitle.css'

const ServiceTitle = (props) => {
    return (
        <div className='row'>
            {/* <div className='col-2'></div> */}
            <div className='col'>
                <div class="row-title">
                    {props.title_left   != null && (<div className='colored title'>{props.title_left} </div>)}
                    {props.title_center != null && (<div className='title'>{props.title_center} </div>)}
                    {props.title_right  != null && (<div className='colored title'>{props.title_right}</div>)}
                </div>

                <div className='row-title'>
                    {props.title_color != null && (<div className='colored title'>{props.title_color} </div>)}
                    {props.title_black != null && (<div className='title'>{props.title_black}</div>)}

                    {props.mobile != null && (<div className='colored title'>{props.mobile}</div>)}
                    {props.mobile != null && (<div className='title'>{props.mobile?' & ':''}</div>)}
                    {props.webApp != null && (<div className='colored title'>{props.webApp}</div>)}
                </div>
                <div className='title'>{props.dev}</div>
            
                <div className='row'>
                <div className='col-3 col-md-6'></div>
                <div className='col-9 col-md-6'>
                    <div className='text'>{props.text}</div>
                </div>
                </div>
            </div>
            {/* <div className='col-2'></div> */}
        </div>
      )
}

export default ServiceTitle;