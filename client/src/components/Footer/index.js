import React from 'react';

function Footer() {
  return (
    <footer className="footer mt-4 py-3">
      <div className="container text-center me-5">
        <img
          src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/brand-type-film-footer-min-600.png"
          alt="cgvfooter"
        />
      </div>
      <div className="footer-cgv-address text-center mt-3">
        <div className="cgv-address-content">
          <div className="text-cgv-address">
            <h5>CÔNG TY TNHH MTV BTL</h5>
            <p className="mb-0">
              Địa Chỉ:&nbsp;Tầng 17, Indochina Plaza Hà Nội, 241 Xuân Thủy, Q. Cầu Giấy, Hà Nội.
            </p>
            <p className="mb-0">Hotline: 1900 60xx</p>
            <p className="mb-0">COPYRIGHT 2022 . All RIGHTS RESERVED .</p>
            <div className="d-flex justify-content-center mt-2">
              <div className="logo-footer-cgv"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
