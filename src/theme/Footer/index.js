import React from 'react';
import './footer.css'
function Footer() {
  return (
      <div className="row av-copyright-footer text-center">Copyright © Avesha 2023. All rights reserved.&nbsp; <a
          href="https://avesha.io/terms-and-condition/">Terms and Conditions</a>&nbsp;&nbsp;and&nbsp; <a
          href="https://avesha.io/privacy-policy/">Privacy Policy</a></div>
  );
}
export default React.memo(Footer);
