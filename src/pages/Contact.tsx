import emailjs from 'emailjs-com';
import { useRef, useState, useEffect } from 'react';

import profil from '../assets/profil.png';
import cv from '../assets/cv.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import cvpdf from '../assets/CV-A.PASTOR.pdf';

function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    // Récupérer les valeurs des champs
    const formData = new FormData(form.current);
    const userName = formData.get('nom');
    const userPrenom = formData.get('prenom');
    const userEmail = formData.get('email');
    const userMessage = formData.get('message');
    const userObjet = formData.get('objet');

    // Vérifier si tous les champs sont remplis
    if (!userName || !userPrenom || !userEmail || !userMessage || !userObjet) {
      setStatusMessage("Tous les champs sont obligatoires ❌");
      setError(true);
      return; // Empêcher l'envoi si des champs sont vides
    }

    // Envoi de l'email principal (administrateur)
    emailjs.send(
      "service_z4k9p8p",
      "template_xozx1j5", 
      {
        nom: userName,
        prenom: userPrenom,
        email: userEmail,
        objet: userObjet,
        message: userMessage
      },
      'H5ZE8jgWVxsqdSoqt' // Ton User ID EmailJS
    ).then(
      (result) => {
        console.log('Email envoyé à l\'administrateur !', result.text);
        setStatusMessage('Votre message a bien été envoyé ✅');
        setError(false);

        // Envoi de l'email de confirmation à l'utilisateur
        emailjs.send(
          'service_z4k9p8p', // Ton service ID EmailJS
          'template_tgwugij',  // Template pour l'utilisateur
          {
            nom: userName,
            email: userEmail,
            message: userMessage,
          },
          'H5ZE8jgWVxsqdSoqt' // Ton User ID EmailJS
        ).then(
          (result) => {
            console.log('Email de confirmation envoyé !', result.text);
          },
          (error) => {
            console.error('Erreur lors de l\'envoi du message de confirmation', error.text);
          }
        );

        form.current?.reset();
      },
      (error) => {
        console.error('Erreur lors de l\'envoi', error.text);
        setStatusMessage('Une erreur est survenue ❌');
        setError(true);
      }
    );
  };

  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => setStatusMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  return (
    <section className="py-16 md:ml-8">
      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:gap-8 lg:gap-30">
          
          {/* Contact*/}
          <div className="relative w-3/4 lg:w-1/4 bg-[var(--color-block)] p-6 rounded-lg shadow-lg z-10 mx-auto md:mx-0">
            <img
              src={profil}
              alt="Alexandra PASTOR"
              className="absolute top-0 left-0 w-20 h-20 object-cover rounded-full border-2 border-[var(--color-tertiary)] bg-white/85 transform -translate-x-1/2 -translate-y-1/2"
            />
            <h3 className="text-xl font-semibold text-[var(--color-secondary)] my-2 ml-2">Contactez-moi</h3>
            <p className="text-xs text-[var(--color-secondary)] mb-4 ml-2">Je serais heureuse de répondre à toutes vos questions.</p>
            <table className="w-full ml-2">
              <tbody>
                <tr>
                  <td className="text-[var(--color-tertiary)] text-xl align-middle pr-4">✆</td>
                  <td className="text-[var(--color-secondary)] align-middle">06.89.97.64.50</td>
                </tr>
                <tr>
                  <td className="text-[var(--color-tertiary)] text-xl align-middle pr-4">@</td>
                  <td className="text-[var(--color-secondary)] align-middle">pastoralex@free.fr</td>
                </tr>
                <tr>
                  <td className="text-[var(--color-tertiary)] text-xl align-middle pr-4">🖃</td>
                  <td className="text-[var(--color-secondary)] align-middle">33 Allée des 4 saisons, 38540 HEYRIEUX</td>
                </tr>
              </tbody>
            </table>
            <div className=' flex flex-col md:flex-row md:items-center mt-2 gap-2 '>
            <p className="text-xs text-[var(--color-secondary)] ml-2">
  Vous pouvez télécharger mon CV ici :
</p>
<a href={cvpdf} download className="hover:underline self-center md:self-auto">
              <img src={cv} alt="Logo CV" className="w-8 h-full bg-[var(--color-primary)] rounded-full border-1 border-[var(--color-tertiary)]" />
            </a>
            </div>
          </div>

          {/* Formulaire */}
          <div className="w-full bg-[var(--color-block)] p-8 rounded-lg shadow-lg relative z-10 md:w-2/3 lg:w-1/3">
            <h3 className="text-xl font-semibold text-[var(--color-secondary)] mb-4">Formulaire de Contact</h3>

            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="nom"
                placeholder="Nom"
                className="w-full p-2 mb-4 bg-white border border-[var(--color-tertiary)] rounded-md"
              />
              <input
                type="text"
                name="prenom"
                placeholder="Prénom"
                className="w-full p-2 mb-4 bg-white border border-[var(--color-tertiary)] rounded-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 mb-4 bg-white border border-[var(--color-tertiary)] rounded-md"
              />
              <input
                type="text"
                name="objet"
                placeholder="Objet"
                className="w-full p-2 mb-4 bg-white border border-[var(--color-tertiary)] rounded-md"
              />
              <textarea
                name="message"
                placeholder="Votre message"
                className="w-full p-2 mb-4 bg-white border border-[var(--color-tertiary)] rounded-md"
                rows={4}
              ></textarea>
              {statusMessage && (
                <div className={`mb-4 p-3 rounded ${error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                  {statusMessage}
                </div>
              )}
              <button
                type="submit"
                className="w-full py-3 bg-[var(--color-tertiary)] text-white font-semibold rounded-md hover:bg-[#B88B29]"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>

        {/* Liens vers profils */}
        <section className="mt-12 text-center text-[var(--color-secondary)]">
          <p className="text-xl mb-4 font-semibold">Retrouvez mes autres profils :</p>
          <div className="flex justify-center gap-6 text-[var(--color-secondary)] text-base">
                        <a href="https://github.com/AlexandraPASTOR" target="_blank" rel="noopener noreferrer" className="hover:underline">
              <img src={github} alt="Logo GitHub" className="w-8 h-8 bg-white rounded-full border-1 border-[var(--color-tertiary)]" />
            </a>
            <a href="https://www.linkedin.com/in/alexandrapastor" target="_blank" rel="noopener noreferrer" className="hover:underline">
              <img src={linkedin} alt="Logo LinkedIn" className="w-8 h-8 bg-white rounded-full border-1 border-[var(--color-tertiary)]" />
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Contact;
