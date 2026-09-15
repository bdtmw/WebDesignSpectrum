'use client';

import { useRef, useState } from 'react';
import styles from './BriefForm.module.css';

const ENDPOINT = '/api/submit-brief';
const MAX_FILE = 2 * 1024 * 1024;
const FALLBACK =
  'Submission could not be confirmed. Your answers are still here. Please retry or email info@webdesignspectrum.com.';

function Field({ id, label, required, description, children }) {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>
        {label}
        {required && <span className={styles.required}>(Required)</span>}
      </label>
      {children}
      {description && <div className={styles.description}>{description}</div>}
    </div>
  );
}

function YesNo({ name, label, onChange }) {
  return (
    <fieldset className={styles.field}>
      <legend className={styles.label}>
        {label}
        <span className={styles.required}>(Required)</span>
      </legend>
      <div className={styles.radios}>
        {['YES', 'NO'].map((v) => (
          <label key={v} className={styles.radio}>
            <input type="radio" name={name} value={v} required onChange={onChange} />
            <span>{v}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function BriefForm() {
  const formRef = useRef(null);
  const requestId = useRef('');
  const [designPref, setDesignPref] = useState('');
  const [notice, setNotice] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onFileChange = (e) => {
    const file = e.target.files?.[0];
    e.target.setCustomValidity(file && file.size > MAX_FILE ? 'Please choose a file no larger than 2 MB.' : '');
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form.reportValidity() || submitting || submitted) return;

    if (!requestId.current) {
      requestId.current = Array.from(crypto.getRandomValues(new Uint8Array(16)), (n) =>
        n.toString(16).padStart(2, '0')
      ).join('');
    }

    setSubmitting(true);
    setNotice('Submitting your brief…');
    try {
      const init = await fetch(ENDPOINT, { credentials: 'same-origin', cache: 'no-store' });
      const session = await init.json();
      if (!init.ok || !session.token) throw new Error(session.message || 'Unable to start submission.');

      const body = new FormData(form);
      body.set('csrf_token', session.token);
      body.set('request_id', requestId.current);

      const response = await fetch(ENDPOINT, { method: 'POST', body, credentials: 'same-origin' });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.message || 'Submission was not accepted.');

      setNotice(result.message);
      setSubmitted(true);
    } catch (error) {
      setNotice(error instanceof SyntaxError || error instanceof TypeError ? FALLBACK : error.message);
    } finally {
      setSubmitting(false);
    }
  };

  const showReference = designPref === 'YES';

  return (
    <>
      <section className={styles.banner}>
        <div className={styles.bannerContent}>
          <h1>Website Brief Form</h1>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <form ref={formRef} className={styles.form} onSubmit={onSubmit} encType="multipart/form-data" noValidate>
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Website Design Questionnaire</h3>
              <div className={styles.sectionDescription}>
                Place Your Order with Confidence: Your security and confidentiality is of the utmost importance at Web
                Design Spectrum. Any and all information provided to us is treated as “Confidential Information” and is
                only used for understanding and executing your orders in the most profound manner.
                {'\n\n'}
                We respect your creativity, privacy and intellectual property right and shall abide by all rules and
                regulations defined by USPTO and US Copyright Office.
                {'\n\n'}
                Note: It is our top priority to create your ideal website and provide you with the best in class
                service. It is necessary for us to know your business the best we can to do so. Following are some
                questions that will help us do our job better. We request you take some time and provide us with the
                needed information.
              </div>
            </div>

            <fieldset className={styles.field}>
              <legend className={styles.label}>Name</legend>
              <input type="text" name="input_22.3" id="input_22_3" className={styles.input} />
              <label htmlFor="input_22_3" className={styles.subLabel}>
                First Name
              </label>
            </fieldset>

            <Field id="input_23" label="Email">
              <input type="email" name="input_23" id="input_23" className={styles.input} />
            </Field>

            <Field id="input_24" label="Contact Number" required>
              <input type="tel" name="input_24" id="input_24" className={styles.input} placeholder="(999) 999-9999" required />
            </Field>

            <Field
              id="input_10"
              label="Exact name of your business/organization?"
              required
              description="(What type of products or services does your company supply? etc...)"
            >
              <input type="text" name="input_10" id="input_10" className={styles.input} required />
            </Field>

            <Field
              id="input_21"
              label="Kindly state the purpose of your website:"
              required
              description="(Is it a selling/informative website or a personal blog? etc.)"
            >
              <input type="text" name="input_21" id="input_21" className={styles.input} required />
            </Field>

            <Field id="input_12" label="State the target audience of your website">
              <textarea name="input_12" id="input_12" className={styles.textarea} rows={10} />
            </Field>

            <Field id="input_18" label="Please list some of your competitors and their websites (if any)">
              <textarea name="input_18" id="input_18" className={styles.textarea} rows={10} />
            </Field>

            <Field
              id="input_25"
              label="As per the navigation of your website, kindly state the title of your WebPages"
              description="(E.g.: Home, About Us, Shop, Contact us, etc.)"
            >
              <textarea name="input_25" id="input_25" className={styles.textarea} rows={10} />
            </Field>

            <YesNo
              name="input_26"
              label="Do you have any specific design, preferences?"
              onChange={(e) => setDesignPref(e.target.value)}
            />

            {showReference && (
              <>
                <Field id="input_27" label="Reference Link" required description="www.example.com">
                  <input type="text" name="input_27" id="input_27" className={styles.input} required />
                </Field>

                <Field
                  id="input_28"
                  label="What type of overall feeling would you like to project with your new Website Domain?"
                  description="(Corporate, fun, high-tech, etc...) Leave this field blank if you would like us to make this determination."
                >
                  <textarea name="input_28" id="input_28" className={styles.textarea} rows={10} />
                </Field>
              </>
            )}

            <Field id="input_19" label="When would you like your website to go live?">
              <input type="text" name="input_19" id="input_19" className={styles.input} placeholder="website to go live?..." />
            </Field>

            <Field id="input_29" label="Do you have any additional comments?">
              <textarea name="input_29" id="input_29" className={styles.textarea} rows={10} />
            </Field>

            <Field
              id="input_20"
              label="Do you have any images, sketches or documents that might be helpful?"
              description="Max. file size: 2 MB."
            >
              <input
                type="file"
                name="input_20"
                id="input_20"
                className={styles.file}
                accept=".pdf,.docx,.txt,.jpg,.jpeg,.png,.webp"
                onChange={onFileChange}
              />
            </Field>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Domain and Web Hosting Details</h3>
            </div>

            <YesNo name="input_31" label="Do you have a Domain Name?" />
            <YesNo name="input_32" label="Do you want us to provide server hosting for your website?" />
            <YesNo name="input_33" label="Would you like to have mobile application of this business in future?" />

            {/* Honeypot: real visitors never see or fill this. */}
            <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" hidden />

            <div className={styles.footer}>
              <button type="submit" className={styles.button} disabled={submitting || submitted}>
                {submitted ? 'Submitted' : 'Submit'}
              </button>
              <p className={styles.notice} role="status" aria-live="polite">
                {notice}
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
