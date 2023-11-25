import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
AOS.init();

const BannerModal = ({ modal, closeModal }) => {
  const modalRef = useRef();

  /* Close modalRef modal click outside the modal */
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!modalRef.current.contains(e.target)) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      id="__BVID__1861___BV_modal_outer_"
      style={{ position: "absolute", zIndex: "1040" }}
    >
      <div
        data-aos="fade-down"
        data-aos-duration="500"
        id="__BVID__1861"
        role="dialog"
        aria-describedby="__BVID__1861___BV_modal_body_"
        className="modal fade show home-modal"
        aria-modal="true"
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <span tabIndex="0"></span>
          <div
            ref={modalRef}
            id="__BVID__1861___BV_modal_content_"
            tabIndex="-1"
            className="modal-content"
          >
            <header
              id="__BVID__1861___BV_modal_header_"
              className="modal-header"
            >
              <div onClick={closeModal} className="close-home-modal">
                <i className="fas fa-times"></i>
              </div>
            </header>
            <div id="__BVID__1861___BV_modal_body_" className="modal-body">
              <div className="home-modal-title">
                <img src="https://g1ver.sprintstaticdata.com/v11/static/admin/img/icons/warning.png" />
                <div>{modal && modal[1].bannerTitle}</div>
              </div>{" "}
              <img src={modal && modal[0].banner} className="img-fluid" />
            </div>
          </div>
          <span tabIndex="0"></span>
        </div>
      </div>
      <div
        id="__BVID__1861___BV_modal_backdrop_"
        className="modal-backdrop"
      ></div>
    </div>
  );
};

export default BannerModal;
