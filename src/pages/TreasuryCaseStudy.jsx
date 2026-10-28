import Header from '../components/Header'
import Footer from '../components/Footer'
import './TreasuryCaseStudy.css'

const steps = [
  { number: '01', title: 'Retrieve account data', text: 'A schedule trigger starts the workflow, then an HTTP Request node fetches the account dataset used for the demonstration.' },
  { number: '02', title: 'Calculate and check exposure', text: 'A JavaScript Code node calculates currency exposure. A threshold check identifies accounts that need attention.' },
  { number: '03', title: 'Generate an AI-assisted report', text: 'The flagged accounts are passed to a model to help prepare a treasury report, which is formatted for downstream delivery.' },
  { number: '04', title: 'Request human approval', text: 'Slack sends an approval request. The approved path continues toward the rebalancing step; the rejection path sends a separate notification.' },
  { number: '05', title: 'Record and notify', text: 'The workflow includes Slack alerts, a Google Sheets append step, and a failure-notification path for operational visibility.' },
]

export default function TreasuryCaseStudy() {
  return (
    <>
      <a className="skip-link" href="#case-study-main">Skip to main content</a>
      <Header />
      <main id="case-study-main" className="case-study">
        <section className="case-study__hero">
          <div className="container">
            <a className="case-study__back" href="/#projects">← Back to featured projects</a>
            <p className="case-study__eyebrow">TECHCRUSH · GROUP 9 · CASE STUDY</p>
            <h1>Automated Corporate Multi-Currency Treasury &amp; Hedging Engine</h1>
            <p className="case-study__intro">A workflow-automation capstone exploring currency exposure checks, risk alerts, AI-assisted reporting, and human approval before rebalancing actions.</p>
            <div className="case-study__meta">
              <span>Role: Group 9 Team Lead</span><span>Type: Learning capstone</span><span>Status: Completed project</span>
            </div>
          </div>
        </section>

        <section className="case-study__section">
          <div className="container case-study__split">
            <div><p className="case-study__eyebrow">01 / THE CHALLENGE</p><h2>Make the risk signal easier to act on.</h2></div>
            <div><p>The project explored how a treasury team could bring multi-currency account data into one repeatable workflow, flag concentrations that cross a defined threshold, prepare a readable report, and route proposed actions through an approval step.</p><p>We built and tested this as a learning exercise using mock/demo data. It was not connected to a live corporate treasury system and does not execute real financial trades.</p></div>
          </div>
        </section>

        <section className="case-study__section case-study__section--dark">
          <div className="container">
            <p className="case-study__eyebrow">02 / WORKFLOW ARCHITECTURE</p>
            <h2>Built and orchestrated in n8n.</h2>
            <p className="case-study__section-intro">The screenshot below is from the actual n8n workflow used for the capstone.</p>
            <figure className="case-study__figure">
              <a href="/images/projects/techcrush-workflow.jpg" target="_blank" rel="noreferrer" aria-label="Open full-size n8n workflow screenshot">
                <img src="/images/projects/techcrush-workflow.jpg" alt="Full n8n workflow showing scheduled data retrieval, exposure calculations, threshold checks, AI report generation, Slack approval, rebalancing, spreadsheet logging, and notification paths" />
              </a>
              <figcaption>Actual n8n workflow screenshot · Select the image to open it at full size.</figcaption>
            </figure>
          </div>
        </section>

        <section className="case-study__section">
          <div className="container">
            <p className="case-study__eyebrow">03 / HOW IT WORKS</p><h2>From account data to an approved next step.</h2>
            <div className="case-study__steps">{steps.map((step) => <article className="case-study__step" key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></article>)}</div>
          </div>
        </section>

        <section className="case-study__section case-study__section--soft">
          <div className="container case-study__split">
            <div><p className="case-study__eyebrow">04 / TOOLS &amp; DESIGN DECISIONS</p><h2>Automation with a human checkpoint.</h2></div>
            <div><div className="case-study__tags">{['n8n', 'Claude / AI model node', 'Slack', 'JavaScript Code node', 'HTTP Request', 'Google Sheets'].map((tool) => <span key={tool}>{tool}</span>)}</div><p>The workflow separates analysis and reporting from the approval-controlled rebalancing path. This was an important design choice: a flagged account should prompt review, not silently trigger an action without a human decision.</p><p>The workflow also includes rejection and failure notification paths, making exceptions part of the design rather than treating only the successful path as important.</p></div>
          </div>
        </section>

        <section className="case-study__section">
          <div className="container case-study__split">
            <div><p className="case-study__eyebrow">05 / MY CONTRIBUTION</p><h2>Learning through building and testing.</h2></div>
            <div><p>As Group 9 Team Lead, I helped shape the workflow logic and testing process, including exposure calculations, percentage-based concentration thresholds, AI-assisted report generation, Slack notifications, and the human approval gate.</p><p>During testing, the demonstration identified seven currencies for review in one test run: USD, GBP, NGN, CAD, ZAR, SGD, and EUR. These were mock-data test results, not findings from a real financial portfolio.</p><h3>What I took away</h3><ul><li>Keep threshold logic consistent and explicit.</li><li>Make approval and rejection paths visible in the workflow.</li><li>Generate reports that help people interpret automation output.</li><li>Test exception paths as well as the expected path.</li></ul></div>
          </div>
        </section>

        <section className="case-study__closing"><div className="container"><p className="case-study__eyebrow">NEXT</p><h2>Interested in thoughtful workflow automation?</h2><p>This capstone strengthened my interest in building practical systems that combine automation, AI-assisted reporting, and human decision-making.</p><a href="/#contact" className="case-study__contact-link">Get in touch →</a></div></section>
      </main>
      <Footer />
    </>
  )
}
