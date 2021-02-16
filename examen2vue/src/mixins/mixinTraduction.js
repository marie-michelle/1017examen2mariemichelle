export const mixinTraduction = {
    data() {
        return {
            langue: "french"
        }
    },

    en: {
        header: 'header.',
        language: "En",
        message: "Hello there!",
        home: 'Home',
        projects: 'Projects',
        user: 'User',
        skills: "Skills",
        education: "Education",
        languages: "Languages",
        experiences: "Experiences",
        contact: "Contact",
        firstname: "Firstname",
        lastname: "Lastname",
        email: "E-mail",
        subject: "Subject",
        chooseSubject: "Choose sobject",
        information: "Information",
        submission: "Submission",
        technicalSupport: "Technical support",
        other: "Other",
        yourMessage: "Your Message...",
        submit: "Submit",
        writeToUs: 'To write to us, please fill out the form.',
    },
    fr: {
        header: 'entete.',
        language: "Fr",
        message: "Bonjour à vous!",
        home: 'Accueil',
        projects: 'Projets',
        user: 'Utilisateur',
        skills: "Compétences",
        education: "Formations",
        languages: "Langues",
        experiences: "Expériences",
        contact: "Contact",
        firstname: "Prénom",
        lastname: "Nom de famille",
        email: "Courriel",
        subject: "Sujet",
        chooseSubject: "Choisir un sujet",
        information: "Information",
        submission: "Soumission",
        technicalSupport: "Support technique",
        other: "Autre",
        yourMessage: "Votre message...",
        submit: "Soumettre",
        writeToUs:'Pour nous écrire, veuillez remplir le formulaire.',
    },

    filters: {
        traduire: function (value, langue) {
            if (langue==='english'){
                let keys=Object.keys(mixinTraduction.en);
                for (let i=0; i<keys.length; i++){
                    if (keys[i]===value){
                        return mixinTraduction.en[value]
                    }
                }
            }else if (langue==='french') {
                let keys=Object.keys(mixinTraduction.fr);
                for(let i=0; i<keys.length; i++){
                    if (keys[i]===value){
                        return mixinTraduction.fr[value]
                    }
                }
            }
        },
    }
};
