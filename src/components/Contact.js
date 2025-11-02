import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperclip } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici tu peux intégrer un service comme EmailJS ou Formspree
    const mailtoLink = `mailto:mohamedmehdi.benameur@polytechnicien.tn?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const downloadCV = () => {
    // Crée un lien de téléchargement pour ton CV
    const link = document.createElement('a');
    link.href = '/cv-mohamed-mehdi-ben-ameur.pdf'; // Mets ton CV dans le dossier public
    link.download = 'CV_Mohamed_Mehdi_Ben_Ameur.pdf';
    link.click();
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info slide-in-left">
            <h3>Let's talk about everything!</h3>
            <p>Looking for a PFE internship opportunity. Feel free to reach out!</p>
            
            <div className="contact-items">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:mohamedmehdi.benameur@polytechnicien.tn">
                    mohamedmehdi.benameur@polytechnicien.tn
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+21697976050">+216 97 976 050</a>
                </div>
              </div>
              
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Location</h4>
                  <span>Sousse, Tunisia</span>
                </div>
              </div>
            </div>

            <div className="social-contact">
              <a href="https://linkedin.com/in/mohamed-mehdi-ben-ameur" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/MehdiBenameur" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>

            <button onClick={downloadCV} className="btn download-cv">
              <FaPaperclip /> Download CV
            </button>
          </div>

          <form className="contact-form slide-in-right" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .contact-info h3 {
          color: var(--primary);
          margin-bottom: 1rem;
          font-size: 1.8rem;
        }

        .contact-info > p {
          color: var(--text-light);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .contact-items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .contact-icon {
          color: var(--secondary);
          font-size: 1.2rem;
          margin-top: 0.25rem;
          flex-shrink: 0;
        }

        .contact-item h4 {
          color: var(--primary);
          margin-bottom: 0.25rem;
        }

        .contact-item a, .contact-item span {
          color: var(--text);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-item a:hover {
          color: var(--secondary);
        }

        .social-contact {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .social-contact a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: var(--light);
          color: var(--primary);
          border-radius: 50%;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-contact a:hover {
          background: var(--secondary);
          color: white;
          transform: translateY(-2px);
        }

        .download-cv {
          background: var(--accent);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .download-cv:hover {
          background: #c0392b;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group input,
        .form-group textarea {
          padding: 1rem;
          border: 2px solid var(--light);
          border-radius: 8px;
          background: var(--card-bg);
          color: var(--text);
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--secondary);
          transform: translateY(-2px);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: var(--text-light);
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;