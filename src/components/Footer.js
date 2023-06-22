import React from 'react'

 function Footer() {
  return (
    <div className = 'main-Footer'>
        <div className = 'container'>
            <div className = 'row'>
                {/*Column 1*/}
                <div className = 'col-md-3 col-sm-6'>
                    <h2>Logo here</h2>
                </div>
                {/*Column 2*/}
                <div className = 'col-md-3 col-sm-6'>
                    <h4>Links</h4>
                        <ul className = 'list-unstyled'>
                            <li>link 1</li>
                            <li>link 2</li>
                            <li>link 3</li>
                            <li>link 4</li>
                        </ul>
                        
                </div>
                {/*Column 3*/}
                <div className = 'col-md-3 col-sm-6'>
                    <h4>Buy</h4>
                        
                </div>
                {/*Column 4*/}
                <div className = 'col-md-3 col-sm-6'>
                    <h4>Sell</h4>
                        
                </div>
            </div>
        </div>
    </div>
  )
}
export default Footer;