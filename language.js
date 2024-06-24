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
            aboutUsTitle: 'QUEM SOMOS',
            projectsTitle: 'PROJETOS',
            developmentTitle: 'DESENVOLVIMENTO',
            activitiesTitle: 'ATIVIDADES',
            concludedSubT: 'CONCLUÍDOS',
            runningSubT: 'EM ANDAMENTO',
            coursesSubT: 'CURSOS',
            servicesSubT: 'SERVIÇOS',
        },
        footer: {
            contactsTitle: 'CONTATOS'
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
            aboutUsTitle: 'ABOUT US',
            projectsTitle: 'PROJECTS',
            developmentTitle: 'DEVELOPMENT',
            activitiesTitle: 'ACTIVITIES',
            concludedSubT: 'CONCLUDED',
            runningSubT: 'IN PROGRESS',
            coursesSubT: 'COURSES',
            servicesSubT: 'SERVICES',
        },
        footer: {
            contactsTitle: 'CONTACTS'
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
            aboutUsTitle: 'QUIÉNES SOMOS',
            projectsTitle: 'PROYECTOS',
            developmentTitle: 'DESARROLLO',
            activitiesTitle: 'ACTIVIDADES',
            concludedSubT: 'CONCLUIDOS',
            runningSubT: 'EN CURSO',
            coursesSubT: 'CURSOS',
            servicesSubT: 'SERVICIOS',
        },
        footer: {
            contactsTitle: 'CONTACTOS'
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
    document.querySelector('.initial h1').textContent = texts.main.aboutUsTitle;
    document.querySelector('#projects h1').textContent = texts.main.projectsTitle;
    document.querySelector('#development h1').textContent = texts.main.developmentTitle;
    document.querySelector('#activities').textContent = texts.main.activitiesTitle;
    document.querySelector('#concluded').textContent = texts.main.concludedSubT;
    document.querySelector('#running').textContent = texts.main.runningSubT;
    document.querySelector('#courses').textContent = texts.main.coursesSubT;
    document.querySelector('#services').textContent = texts.main.servicesSubT;

    // Atualiza o rodapé (footer)
    document.querySelector('#contacts').textContent = texts.footer.contactsTitle;
}

// Adiciona um listener para mudança no seletor de idiomas
document.getElementById('language-select').addEventListener('change', function() {
    const selectedLanguage = this.value;
    updateLanguage(selectedLanguage);
});

// Chamada inicial para garantir que o texto esteja correto ao carregar a página
updateLanguage('pt-br'); // Defina o idioma inicial aqui
