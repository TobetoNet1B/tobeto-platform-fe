import React from 'react'
import { FaBuilding, FaCalendarAlt, FaFile, FaStopwatch, FaTag } from 'react-icons/fa'
import { Link } from 'react-router-dom'

type Props = {}

const CourseAbout = (props: Props) => {
  return (
    <div role="tabpanel" tabIndex={0} aria-hidden="false" className="outline-none " id="rc-tabs-0-panel-about" aria-labelledby="rc-tabs-0-tab-about">{/*className="ant-tabs-tabpane ant-tabs-tabpane-active" */}
      <div className="">{/*className="activity-detail-info" */}
        <div className="pt-0 px-0 pb-[15px]">{/*className="info-section" */}
          <div className="!-mx-2 box-border flex flex-row flex-wrap">{/*className="row" */}
            <div className="!px-2 flex xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[16.66666%] xl:max-w-[16.66666%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[16.66666667%] lg:max-w-[16.66666667%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[25%] md:max-w-[25%] box-border flex-grow-0 flex-shrink-0 basis-[41.66666667%] max-w-[41.66666667%]">{/*className="col-lg-2 col-md-2 col-sm-3 col-xs-5" */}
              <FaCalendarAlt />
              <strong className='ml-1'>Başlangıç</strong>
            </div>
            <div className="!px-2 xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[83.33333333%] xl:max-w-[83.33333333%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[83.33333333%] lg:max-w-[83.33333333%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[75%] md:max-w-[75%] box-border flex-grow-0 flex-shrink-0 basis-[58.33333333%] max-w-[58.33333333%]">{/*className="col-lg-10 col-md-10 col-sm-9 col-xs-7" */}
              25 EKİ 2023 11:20
            </div>
          </div>
          <div className="!-mx-2 box-border flex flex-row flex-wrap">{/*className="row" */}
            <div className="!px-2 flex xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[16.66666667%] xl:max-w-[16.66666667%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[16.66666667%] lg:max-w-[16.66666667%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[25%] md:max-w-[25%] box-border flex-grow-0 flex-shrink-0 basis-[41.66666667%] max-w-[41.66666667%]">{/*className="col-lg-2 col-md-2 col-sm-3 col-xs-5" */}
              <FaCalendarAlt className='invisible' />

              <strong className='ml-1'>Bitiş</strong>
            </div>
            <div className="!px-2 xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[83.33333333%] xl:max-w-[83.33333333%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[83.33333333%] lg:max-w-[83.33333333%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[75%] md:max-w-[75%] box-border flex-grow-0 flex-shrink-0 basis-[58.33333333%] max-w-[58.33333333%]">{/*className="col-lg-10 col-md-10 col-sm-9 col-xs-7" */}
              <span>30 HAZ 2024 23:59</span>
            </div>
          </div>
        </div>
        <div className="pt-0 px-0 pb-[15px] !-mx-2 box-border flex flex-row flex-wrap">{/* className="info-section row" */}
          <div className="!px-2 flex xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[16.66666667%] xl:max-w-[16.66666667%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[16.66666667%] lg:max-w-[16.66666667%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[25%] md:max-w-[25%] box-border flex-grow-0 flex-shrink-0 basis-[41.66666667%] max-w-[41.66666667%]">{/*className="col-lg-2 col-md-2 col-sm-3 col-xs-5" */}
            <FaStopwatch />
            <strong className='ml-1'>Geçirdiğin Süre</strong>
          </div>
          <div className="!px-2 xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[83.33333333%] xl:max-w-[83.33333333%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[83.33333333%] lg:max-w-[83.33333333%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[75%] md:max-w-[75%] box-border flex-grow-0 flex-shrink-0 basis-[58.33333333%] max-w-[58.33333333%]">{/*className="col-lg-10 col-md-10 col-sm-9 col-xs-7" */}
            <span>7 dk</span>
          </div>
        </div>
        <div className="pt-0 px-0 pb-[15px] !-mx-2 box-border flex flex-row flex-wrap">{/*className="info-section row" */}
          <div className="!px-2 flex xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[16.66666667%] xl:max-w-[16.66666667%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[16.66666667%] lg:max-w-[16.66666667%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[25%] md:max-w-[25%] box-border flex-grow-0 flex-shrink-0 basis-[41.66666667%] max-w-[41.66666667%]">{/*className="col-lg-2 col-md-2 col-sm-3 col-xs-5" */}
            <FaStopwatch />
            <strong className='ml-1'>Tahmini Süre</strong>
          </div>
          <div className="!px-2 xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[83.33333333%] xl:max-w-[83.33333333%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[83.33333333%] lg:max-w-[83.33333333%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[75%] md:max-w-[75%] box-border flex-grow-0 flex-shrink-0 basis-[58.33333333%] max-w-[58.33333333%]">7 sa 19 dk</div>{/*className="col-lg-10 col-md-10 col-sm-9 col-xs-7" */}
        </div>
        <div className="pt-0 px-0 pb-[15px] !-mx-2 box-border flex flex-row flex-wrap">{/*className="info-section row" */}
          <div className="!px-2 flex xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[16.66666667%] xl:max-w-[16.66666667%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[16.66666667%] lg:max-w-[16.66666667%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[25%] md:max-w-[25%] box-border flex-grow-0 flex-shrink-0 basis-[41.66666667%] max-w-[41.66666667%]">{/*className="col-lg-2 col-md-2 col-sm-3 col-xs-5" */}
            <FaTag className='rotate-90' />
            <strong className='ml-1'>Kategori</strong>
          </div>
          <div className="!px-2 xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[83.33333333%] xl:max-w-[83.33333333%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[83.33333333%] lg:max-w-[83.33333333%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[75%] md:max-w-[75%] box-border flex-grow-0 flex-shrink-0 basis-[58.33333333%] max-w-[58.33333333%]">{/*className="col-lg-10 col-md-10 col-sm-9 col-xs-7" */}
            <div>Genel</div>
          </div>
        </div>
        <div className="pt-0 px-0 pb-[15px] !-mx-2 box-border flex flex-row flex-wrap">{/*className="info-section row" */}
          <div className="!px-2 flex xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[16.66666667%] xl:max-w-[16.66666667%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[16.66666667%] lg:max-w-[16.66666667%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[25%] md:max-w-[25%] box-border flex-grow-0 flex-shrink-0 basis-[58.33333333%] max-w-[58.33333333%]">{/*className="col-lg-2 col-md-2 col-sm-3 col-xs-7" */}
            <FaFile />
            <strong className='ml-1'>İçerik</strong>
          </div>
          <div className="!px-2 xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[83.33333333%] xl:max-w-[83.33333333%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[83.33333333%] lg:max-w-[83.33333333%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[75%] md:max-w-[75%] box-border flex-grow-0 flex-shrink-0 basis-[41.66666667%] max-w-[41.66666667%]">131</div>{/*className="col-lg-10 col-md-10 col-sm-9 col-xs-5" */}
        </div>
        <div className="pt-0 px-0 pb-[5px] !-mx-2 box-border flex flex-row flex-wrap">{/*className="info-section file row" */}
          <div className="!px-2 flex xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[16.66666667%] xl:max-w-[16.66666667%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[16.66666667%] lg:max-w-[16.66666667%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[25%] md:max-w-[25%] box-border flex-grow-0 flex-shrink-0 basis-[58.33333333%] max-w-[58.33333333%]">{/*className="col-lg-2 col-md-2 col-sm-3 col-xs-7" */}
            <FaFile className='invisible' />
            <span className='ml-1'>Video</span>
          </div>
          <div className="!px-2 xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[83.33333333%] xl:max-w-[83.33333333%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[83.33333333%] lg:max-w-[83.33333333%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[75%] md:max-w-[75%] box-border flex-grow-0 flex-shrink-0 basis-[41.66666667%] max-w-[41.66666667%]">131</div>{/*className="col-lg-10 col-md-10 col-sm-9 col-xs-5" */}
        </div>
        <div id="last-section" className="!pt-[15px] !px-0 pb-[15px] !-mx-2 box-border flex flex-row flex-wrap">{/*className="info-section row" */}
          <div className="!px-2 flex xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[16.66666667%] xl:max-w-[16.66666667%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[16.66666667%] lg:max-w-[16.66666667%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[25%] md:max-w-[25%] box-border flex-grow-0 flex-shrink-0 basis-[41.66666667%] max-w-[41.66666667%]">{/*className="col-lg-2 col-md-2 col-sm-3 col-xs-5" */}
            <FaBuilding />
            <strong className='ml-1'>Üretici Firma</strong>
          </div>
          <div className="!px-2 xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[83.33333333%] xl:max-w-[83.33333333%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[83.33333333%] lg:max-w-[83.33333333%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[75%] md:max-w-[75%] box-border flex-grow-0 flex-shrink-0 basis-[58.33333333%] max-w-[58.33333333%]">{/*className="col-lg-10 col-md-10 col-sm-9 col-xs-7" */}
            <Link to={"#"} className="text-[#1677ff] bg-transparent transition-colors duration-300 touch-manipulation ">Enocta</Link>{/*className="btn-change" */}
          </div>
        </div>
      </div>
    </div>

  )
}

export default CourseAbout