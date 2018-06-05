import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="mailingList-wrap">
        <h3>Mailing list</h3>
        <p>We&#39;ll only email you to announce upcoming events.</p>
        <div id="mc_embed_signup">
          <form
            action="https://mplsjrdevs.us15.list-manage.com/subscribe/post?u=15e9ff6a082fef90507e7abca&amp;id=8fbf9281ef"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
          >
            <div id="mc_embed_signup_scroll">
              <input
                type="email"
                name="EMAIL"
                className="email"
                id="mce-EMAIL"
                placeholder="email address"
                required
              />{' '}
              real people should not fill this in and expect good things - do
              not remove this or risk form bot signups
              <div id="mc_hidden" aria-hidden="true">
                <input
                  type="text"
                  name="b_15e9ff6a082fef90507e7abca_8fbf9281ef"
                  tabIndex="-1"
                  value=""
                />
              </div>
              <div className="clear">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="slack-wrap">
        <h3>Slack</h3>
        <p>
          We&#39;ve got a slack group! If you identify as an aspiring or less
          experienced software engineer and would like to join, please{' '}
          <a href="mailto:mplsjrdevs@gmail.com">email us</a>.
        </p>
      </div>

      <div className="email-wrap">
        <h3>Email</h3>
        <p>
          Got questions? Please{' '}
          <a href="mailto:mplsjrdevs@gmail.com">send us an email</a> and
          we&#39;ll be in touch.
        </p>
      </div>
    </section>
  );
};

export default Contact;
