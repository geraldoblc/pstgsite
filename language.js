// Defina os textos para cada idioma
const languageTexts = {
    'pt-br': {
        header: {
            projects: 'PROJETOS',
            development: 'DESENVOLVIMENTO',
            activities: 'ATIVIDADES',
            contacts: 'CONTATOS'
        },
        main: {
            aboutUs: 'QUEM SOMOS',
            projectsTitle: 'PROJETOS',
            developmentTitle: 'DESENVOLVIMENTO',
            activitiesTitle: 'ATIVIDADES'
            // Adicione outros textos do <main> conforme necessário
        },
        footer: {
            contactsTitle: 'CONTATOS',
        }
    },
    'en': {
        header: {
            projects: 'PROJECTS',
            development: 'DEVELOPMENT',
            activities: 'ACTIVITIES',
            contacts: 'CONTACTS'
        },
        main: {
            aboutUs: 'ABOUT US',
            projectsTitle: 'PROJECTS',
            developmentTitle: 'DEVELOPMENT',
            activitiesTitle: 'ACTIVITIES'
            // Adicione outros textos do <main> conforme necessário
        },
        footer: {
            contactsTitle: 'CONTACTS',
        }
    },
    'es': {
        header: {
            projects: 'PROYECTOS',
            development: 'DESARROLLO',
            activities: 'ACTIVIDADES',
            contacts: 'CONTACTOS'
        },
        main: {
            aboutUs: 'QUIÉNES SOMOS',
            projectsTitle: 'PROYECTOS',
            developmentTitle: 'DESARROLLO',
            activitiesTitle: 'ACTIVIDADES'
            // Adicione outros textos do <main> conforme necessário
        },
        footer: {
            contactsTitle: 'CONTACTOS',
        }
    }
};

// Função para atualizar todo o conteúdo do site com base no idioma selecionado
function updateLanguage(language) {
    const texts = languageTexts[language];

    // Atualiza o cabeçalho (header)
    document.querySelector('a[href="#projects"]').textContent = texts.header.projects;
    document.querySelector('a[href="#development"]').textContent = texts.header.development;
    document.querySelector('a[href="#activities"]').textContent = texts.header.activities;
    document.querySelector('a[href="#contacts"]').textContent = texts.header.contacts;

    // Atualiza o conteúdo principal (main)
    document.querySelector('.initial h1').textContent = texts.main.aboutUs;
    document.querySelector('#projects h1').textContent = texts.main.projectsTitle;
    document.querySelector('#development h1').textContent = texts.main.developmentTitle;
    document.querySelector('#activities').textContent = texts.main.activitiesTitle;
    // Adicione outras atualizações conforme necessário para outros elementos do <main>

    // Atualiza o rodapé (footer)
    document.querySelector('.footer-content h4').textContent = texts.footer.company;
    document.querySelector('.footer-content p:nth-of-type(1)').textContent = texts.footer.company;
    document.querySelector('.footer-content p:nth-of-type(2)').textContent = texts.footer.cnpj;
    document.querySelector('.footer-content p:nth-of-type(3)').textContent = texts.footer.address;
    document.querySelector('footer p:last-of-type').textContent = texts.footer.copyright;
}

// Adiciona um listener para mudança no seletor de idiomas
document.getElementById('language-select').addEventListener('change', function() {
    const selectedLanguage = this.value;
    updateLanguage(selectedLanguage);
});

// Chamada inicial para garantir que o texto esteja correto ao carregar a página
updateLanguage('pt-br'); // Defina o idioma inicial aqui
