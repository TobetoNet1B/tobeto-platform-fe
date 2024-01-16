import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const CourseAbout = (props: Props) => {
  return (
    <div role="tabpanel" tabIndex={0} aria-hidden="false" className="outline-none " id="rc-tabs-0-panel-about" aria-labelledby="rc-tabs-0-tab-about">{/*className="ant-tabs-tabpane ant-tabs-tabpane-active" */}
      <div className="relative">{/*className="activity-detail-info" */}
        <div className="pt-0 px-0 pb-[15px]">{/*className="info-section" */}
          <div className="!-mx-2 box-border flex flex-row flex-wrap">{/*className="row" */}
            <div className="!mx-2 ">{/*className="col-lg-2 col-md-2 col-sm-3 col-xs-5" */}
              <i className="mt-0.5 mr-[7.5px] mb-0 ml-0 inline-block align-middle not-italic font-normal no-underline whitespace-nowrap antialiased" style={{textRendering:"optimizeLegibility", fontFeatureSettings:"liga"}}/>{/*className="sg-icon sg-oven" */}
              <i className="fa-solid fa-calendar-days mr-1"></i>
              <strong>Başlangıç</strong>
            </div>
            <div className="mt-0.5">{/*className="col-lg-10 col-md-10 col-sm-9 col-xs-7" */}
              25 EKİ 2023 11:20
            </div>
          </div>
          <div className="!-mx-2 box-border flex flex-row flex-wrap">{/*className="row" */}
            <div className="!mx-2">{/*className="col-lg-2 col-md-2 col-sm-3 col-xs-5" */}
              <i className="mt-0.5 mr-[7.5px] mb-0 ml-0 inline-block align-middle not-italic font-normal no-underline whitespace-nowrap antialiased" style={{textRendering:"optimizeLegibility", fontFeatureSettings:"liga"}}/>{/*className="hidden-icon sg-icon sg-oven" */}
              <i className="fa-solid fa-calendar-days mr-1 invisible"></i>
              <strong>Bitiş</strong>
            </div>
            <div className="!mx-2 ">{/*className="col-lg-10 col-md-10 col-sm-9 col-xs-7" */}
              <span>30 HAZ 2024 23:59</span>
            </div>
          </div>
        </div>
        <div className="pt-0 px-0 pb-[15px] !-mx-2 box-border flex flex-row flex-wrap">{/* className="info-section row" */}
          <div className="!mx-2">{/*className="col-lg-2 col-md-2 col-sm-3 col-xs-5" */}
            <i className="mt-0.5 mr-[7px] mb-0 ml-0 inline-block align-middle not-italic font-normal no-underline whitespace-nowrap antialiased" style={{textRendering:"optimizeLegibility", fontFeatureSettings:"liga"}}/>{/*className="sg-icon sg-stopwatch"  */}
            <i className="fa-regular fa-clock mr-1"></i>
            <strong>Geçirdiğin Süre</strong>
          </div>
          <div className="!mx-2">{/*className="col-lg-10 col-md-10 col-sm-9 col-xs-7" */}
            <span>7 dk</span>
          </div>
        </div>
        <div className="pt-0 px-0 pb-[15px] !-mx-2 box-border flex flex-row flex-wrap">{/*className="info-section row" */}
          <div className="!mx-2 ">{/*className="col-lg-2 col-md-2 col-sm-3 col-xs-5" */}
            <i className="mt-0.5 mr-[7px] mb-0 ml-0 inline-block align-middle not-italic font-normal no-underline whitespace-nowrap antialiased" style={{textRendering:"optimizeLegibility", fontFeatureSettings:"liga"}}/>{/*className="sg-icon sg-stopwatch" */}
            <i className="fa-regular fa-clock mr-1"></i>
            <strong>Tahmini Süre</strong>
          </div>
          <div className="!mx-2">7 sa 19 dk</div>{/*className="col-lg-10 col-md-10 col-sm-9 col-xs-7" */}
        </div>
        <div className="pt-0 px-0 pb-[15px] !-mx-2 box-border flex flex-row flex-wrap">{/*className="info-section row" */}
          <div className="!mx-2 ">{/*className="col-lg-2 col-md-2 col-sm-3 col-xs-5" */}
            <i className="mt-0.5 mr-[7px] mb-0 ml-0 inline-block align-middle not-italic font-normal no-underline whitespace-nowrap antialiased" style={{textRendering:"optimizeLegibility", fontFeatureSettings:"liga"}}/>{/*className="sg-icon sg-tag" */}
            <i className="fa-regular fa-bookmark mr-1"></i>
            <strong>Kategori</strong>
          </div>
          <div className="!mx-2">{/*className="col-lg-10 col-md-10 col-sm-9 col-xs-7" */}
            <div>Genel</div>
          </div>
        </div>
        <div className="pt-0 px-0 pb-[15px] !-mx-2 box-border flex flex-row flex-wrap">{/*className="info-section row" */}
          <div className="!mx-2">{/*className="col-lg-2 col-md-2 col-sm-3 col-xs-7" */}
            <i className="mt-0.5 mr-[7px] mb-0 ml-0 inline-block align-middle not-italic font-normal no-underline whitespace-nowrap antialiased" style={{textRendering:"optimizeLegibility", fontFeatureSettings:"liga"}}/>{/*className="sg-icon sg-file"  */}
            <i className="fa-regular fa-file mr-1"></i>
            <strong>İçerik</strong>
          </div>
          <div className="!mx-2">131</div>{/*className="col-lg-10 col-md-10 col-sm-9 col-xs-5" */}
        </div>
        <div className="pt-0 px-0 pb-[5px] !-mx-2 box-border flex flex-row flex-wrap">{/*className="info-section file row" */}
          <div className="!mx-2">{/*className="col-lg-2 col-md-2 col-sm-3 col-xs-7" */}
            <i className="mt-0.5 mr-[7px] mb-0 ml-0 inline-block align-middle not-italic font-normal no-underline whitespace-nowrap antialiased" style={{textRendering:"optimizeLegibility", fontFeatureSettings:"liga"}}/>{/*className="hidden-icon sg-icon sg-file" */}
            <i className="fa-regular fa-file mr-1 invisible"></i>
            <span>Video</span>
          </div>
          <div className="!mx-2">131</div>{/*className="col-lg-10 col-md-10 col-sm-9 col-xs-5" */}
        </div>
        <div id="last-section" className="!pt-[15px] !px-0 pb-[15px] !-mx-2 box-border flex flex-row flex-wrap">{/*className="info-section row" */}
          <div className="!mx-2">{/*className="col-lg-2 col-md-2 col-sm-3 col-xs-5" */}
            <i className="mt-0.5 mr-[7px] mb-0 ml-0 inline-block align-middle not-italic font-normal no-underline whitespace-nowrap antialiased" style={{textRendering:"optimizeLegibility", fontFeatureSettings:"liga"}}/>{/*className="sg-icon sg-briefcase" */}
            <i className="fa-regular fa-building mr-1"></i>
            <strong>Üretici Firma</strong>
          </div>
          <div className="!mx-2">{/*className="col-lg-10 col-md-10 col-sm-9 col-xs-7" */}
            <Link to={""} className="text-[#1677ff] bg-transparent transition-colors duration-300 touch-manipulation ">Enocta</Link>{/*className="btn-change" */}
          </div>
        </div>
      </div>
    </div>

  )
}

export default CourseAbout