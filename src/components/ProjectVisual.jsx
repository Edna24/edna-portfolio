/**
 * CSS/SVG interface visuals — synthetic demo data, not client results.
 */
export default function ProjectVisual({ variant, inDevelopment, statusNote }) {
  if (variant === 'treasury-capstone') {
    return (
      <figure className="project-visual project-visual--treasury">
        <div className="pv-treasury">
          <header className="pv-treasury__bar">
            <span className="pv-chip pv-chip--learning">Capstone · Learning project</span>
            <span className="pv-treasury__title">Treasury exposure overview</span>
          </header>
          <div className="pv-treasury__grid">
            <div className="pv-fx">
              <p className="pv-label">FX exposure (demo)</p>
              <ul className="pv-fx__list">
                <li>
                  <span>USD</span>
                  <span className="pv-fx__val">$1.24M</span>
                  <span className="pv-pill pv-pill--watch">Watch</span>
                </li>
                <li>
                  <span>EUR</span>
                  <span className="pv-fx__val">€860K</span>
                  <span className="pv-pill pv-pill--ok">Within band</span>
                </li>
                <li>
                  <span>GBP</span>
                  <span className="pv-fx__val">£420K</span>
                  <span className="pv-pill pv-pill--alert">Threshold</span>
                </li>
              </ul>
            </div>
            <div className="pv-flow-stack">
              <p className="pv-label">Approval workflow (concept)</p>
              <ol className="pv-steps">
                <li className="pv-step pv-step--done">Exposure check</li>
                <li className="pv-step pv-step--active">Threshold alert</li>
                <li className="pv-step">Manager approval</li>
                <li className="pv-step">Execute hedge</li>
              </ol>
            </div>
            <div className="pv-hedge">
              <p className="pv-label">Hedging queue (demo)</p>
              <div className="pv-hedge__row">
                <span>GBP/USD forward</span>
                <span className="pv-pill pv-pill--pending">Awaiting approval</span>
              </div>
              <div className="pv-hedge__row">
                <span>EUR cap review</span>
                <span className="pv-pill pv-pill--ok">Scheduled</span>
              </div>
            </div>
          </div>
        </div>
        <figcaption className="project-visual__caption">
          {statusNote || 'Illustrative capstone mockup — not live financial data'}
        </figcaption>
      </figure>
    )
  }

  if (variant === 'design-samples') {
    return (
      <figure className="project-visual project-visual--design">
        <div className="pv-mosaic pv-mosaic--studio">
          <div className="pv-tile pv-tile--hero">
            <span className="pv-tile__tag">Brand layout</span>
          </div>
          <div className="pv-tile">
            <span className="pv-tile__tag">Type</span>
          </div>
          <div className="pv-tile pv-tile--accent">
            <span className="pv-tile__tag">UI frame</span>
          </div>
          <div className="pv-tile pv-tile--wide">
            <span className="pv-tile__tag">Campaign spread</span>
          </div>
          <div className="pv-tile">
            <span className="pv-tile__tag">Asset</span>
          </div>
        </div>
        <figcaption className="project-visual__caption">
          Replace tiles with approved Lumivex design exports
        </figcaption>
      </figure>
    )
  }

  if (variant === 'nexus-ops-dashboard') {
    return (
      <figure
        className={`project-visual project-visual--nexus ${inDevelopment ? 'project-visual--dev' : ''}`}
      >
        {inDevelopment && <span className="pv-dev-badge pv-dev-badge--nexus">Prototype</span>}
        <div className="pv-nexus">
          <header className="pv-nexus__head">
            <span className="pv-nexus__brand">Lumivex Nexus · NexusFlow</span>
            <span className="pv-chip pv-chip--nexus">Demo data</span>
          </header>
          <div className="pv-nexus__stats">
            <div>
              <span className="pv-stat-label">Open orders</span>
              <span className="pv-stat-val">12</span>
            </div>
            <div>
              <span className="pv-stat-label">Low stock SKUs</span>
              <span className="pv-stat-val">3</span>
            </div>
            <div>
              <span className="pv-stat-label">Payments pending</span>
              <span className="pv-stat-val">5</span>
            </div>
          </div>
          <table className="pv-table">
            <thead>
              <tr>
                <th scope="col">Order</th>
                <th scope="col">Inventory</th>
                <th scope="col">Payment</th>
                <th scope="col">Activity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ORD-1042</td>
                <td>
                  <span className="pv-dot pv-dot--ok" /> In stock
                </td>
                <td>
                  <span className="pv-pay pv-pay--paid">Paid</span>
                </td>
                <td>Pick & pack</td>
              </tr>
              <tr>
                <td>ORD-1043</td>
                <td>
                  <span className="pv-dot pv-dot--low" /> Low
                </td>
                <td>
                  <span className="pv-pay pv-pay--pending">Pending</span>
                </td>
                <td>Replenish flag</td>
              </tr>
              <tr>
                <td>ORD-1044</td>
                <td>
                  <span className="pv-dot pv-dot--ok" /> In stock
                </td>
                <td>
                  <span className="pv-pay pv-pay--review">Review</span>
                </td>
                <td>Awaiting approval</td>
              </tr>
            </tbody>
          </table>
        </div>
        <figcaption className="project-visual__caption">
          {statusNote || 'Prototype UI — synthetic rows, not client outcomes'}
        </figcaption>
      </figure>
    )
  }

  return null
}
