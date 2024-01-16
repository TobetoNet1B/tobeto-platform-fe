import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const CourseAbout = (props: Props) => {
  return (
    <div role="tabpanel" tabIndex={0} aria-hidden="false" className="outline-none " id="rc-tabs-0-panel-about" aria-labelledby="rc-tabs-0-tab-about">{/*className="ant-tabs-tabpane ant-tabs-tabpane-active" */}
      <div className="relative">{/*className="activity-detail-info" */}
        <div className="pt-0 px-0 pb-[15px]">{/*className="info-section" */}
          <div className="!-mx-2 box-border flex flex-row flex-wrap">{/*className="row" */}
            <div className="col-lg-2 col-md-2 col-sm-3 col-xs-5">{/*className="col-lg-2 col-md-2 col-sm-3 col-xs-5" */}
              <i className="sg-icon sg-oven" />{/*className="sg-icon sg-oven" */}
              <strong>Başlangıç</strong>
            </div>
            <div className="col-lg-10 col-md-10 col-sm-9 col-xs-7">{/*className="col-lg-10 col-md-10 col-sm-9 col-xs-7" */}
              25 EKİ 2023 11:20
            </div>
          </div>
          <div className="!-mx-2 box-border flex flex-row flex-wrap">{/*className="row" */}
            <div className="col-lg-2 col-md-2 col-sm-3 col-xs-5">{/*className="col-lg-2 col-md-2 col-sm-3 col-xs-5" */}
              <i className="hidden-icon sg-icon sg-oven" />{/*className="hidden-icon sg-icon sg-oven" */}
              <strong>Bitiş</strong>
            </div>
            <div className="col-lg-10 col-md-10 col-sm-9 col-xs-7">{/*className="col-lg-10 col-md-10 col-sm-9 col-xs-7" */}
              <span>30 HAZ 2024 23:59</span>
            </div>
          </div>
        </div>
        <div className="info-section row">{/* className="info-section row" */}
          <div className="col-lg-2 col-md-2 col-sm-3 col-xs-5">{/*className="col-lg-2 col-md-2 col-sm-3 col-xs-5" */}
            <i className="sg-icon sg-stopwatch" />{/*className="sg-icon sg-stopwatch"  */}
            <strong>Geçirdiğin Süre</strong>
          </div>
          <div className="col-lg-10 col-md-10 col-sm-9 col-xs-7">{/*className="col-lg-10 col-md-10 col-sm-9 col-xs-7" */}
            <span>7 dk</span>
          </div>
        </div>
        <div className="info-section row">{/*className="info-section row" */}
          <div className="col-lg-2 col-md-2 col-sm-3 col-xs-5">{/*className="col-lg-2 col-md-2 col-sm-3 col-xs-5" */}
            <i className="sg-icon sg-stopwatch" />{/*className="sg-icon sg-stopwatch" */}
            <strong>Tahmini Süre</strong>
          </div>
          <div className="col-lg-10 col-md-10 col-sm-9 col-xs-7">7 sa 19 dk</div>{/*className="col-lg-10 col-md-10 col-sm-9 col-xs-7" */}
        </div>
        <div className="info-section row">{/*className="info-section row" */}
          <div className="col-lg-2 col-md-2 col-sm-3 col-xs-5">{/*className="col-lg-2 col-md-2 col-sm-3 col-xs-5" */}
            <i className="sg-icon sg-tag" />{/*className="sg-icon sg-tag" */}
            <strong>Kategori</strong>
          </div>
          <div className="col-lg-10 col-md-10 col-sm-9 col-xs-7">{/*className="col-lg-10 col-md-10 col-sm-9 col-xs-7" */}
            <div>Genel</div>
          </div>
        </div>
        <div className="info-section row">{/*className="info-section row" */}
          <div className="col-lg-2 col-md-2 col-sm-3 col-xs-7">{/*className="col-lg-2 col-md-2 col-sm-3 col-xs-7" */}
            <i className="sg-icon sg-file" />{/*className="sg-icon sg-file"  */}
            <strong>İçerik</strong>
          </div>
          <div className="col-lg-10 col-md-10 col-sm-9 col-xs-5">131</div>{/*className="col-lg-10 col-md-10 col-sm-9 col-xs-5" */}
        </div>
        <div className="info-section file row">{/*className="info-section file row" */}
          <div className="col-lg-2 col-md-2 col-sm-3 col-xs-7">{/*className="col-lg-2 col-md-2 col-sm-3 col-xs-7" */}
            <i className="hidden-icon sg-icon sg-file" />{/*className="hidden-icon sg-icon sg-file" */}
            <span>Video</span>
          </div>
          <div className="col-lg-10 col-md-10 col-sm-9 col-xs-5">131</div>{/*className="col-lg-10 col-md-10 col-sm-9 col-xs-5" */}
        </div>
        <div id="last-section" className="info-section row">{/*className="info-section row" */}
          <div className="col-lg-2 col-md-2 col-sm-3 col-xs-5">{/*className="col-lg-2 col-md-2 col-sm-3 col-xs-5" */}
            <i className="sg-icon sg-briefcase" />{/*className="sg-icon sg-briefcase" */}
            <strong>Üretici Firma</strong>
          </div>
          <div className="col-lg-10 col-md-10 col-sm-9 col-xs-7">{/*className="col-lg-10 col-md-10 col-sm-9 col-xs-7" */}
            <Link to={""} className="btn-change">Enocta</Link>{/*className="btn-change" */}
          </div>
        </div>
      </div>
    </div>

  )
}

export default CourseAbout