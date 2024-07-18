// Defina os textos para cada idioma
const languageTexts = {
    'pt-br': {
        header: {
            contacts: 'CONTATOS'
        },
        main: {
            aboutUsTitle: 'QUEM SOMOS',
            projectsTitle: 'PROJETOS',
            activitiesTitle: 'ATIVIDADES',
            concludedSubT: 'CONCLUÍDOS',
            runningSubT: 'EM ANDAMENTO',
            coursesSubT: 'CURSOS',
            servicesSubT: 'SERVIÇOS',
            welcomeTi: 'Bem-vindo(a) à divisão de TI da PSTG!',
            welcomeEe: 'Bem-vindo(a) à divisão de EE da PSTG!',
            aboutUsParagraphTi: 'A PSTG orgulhosamente apresenta sua Divisão de TI (TI-PSTG), especializada no desenvolvimento de software para diversas áreas da engenharia. Com uma equipe de desenvolvedores altamente capacitados e engenheiros multidisciplinares, incluindo mestres e doutores com mais de 20 anos de experiência, mais de 200 projetos concluídos, nossa missão é liderar a inovação e eficiência em seus projetos de engenharia.',
            aboutUsParagraphEe: 'A divisão de Estudos Elétricos (EE-PSTG) da PSTG foi criada para atender às demandas do setor elétrico em transmissão, geração, distribuição e armazenamento de energia. Composta por uma equipe que reúne profissionais com mais de 20 anos de experiência e jovens talentos, esta divisão combina tradição e inovação para oferecer serviços que atendem aos mais altos padrões de prazo, qualidade e custo, tornando-se uma empresa de consultoria competitiva tanto no mercado nacional quanto internacional.'
        },
        footer: {
            contactsTitle: 'CONTATOS'
        }
        
    },

    'en': {
        header: {
            contacts: 'CONTACTS'
        },
        main: {
            aboutUsTitle: 'ABOUT US',
            projectsTitle: 'PROJECTS',
            activitiesTitle: 'ACTIVITIES',
            concludedSubT: 'CONCLUDED',
            runningSubT: 'IN PROGRESS',
            coursesSubT: 'COURSES',
            servicesSubT: 'SERVICES',
            welcomeTi: 'Welcome to the PSTG TI division!',
            welcomeEe: 'Welcome to the PSTG EE division!',
            aboutUsParagraphTi: 'PSTG proudly presents its TI Division (TI-PSTG), which specializes in software development for various engineering fields. With a team of highly skilled developers and multidisciplinary engineers, including masters and doctors with more than 20 years experience and more than 200 completed projects, our mission is to lead innovation and efficiency in your engineering projects.',
            aboutUsParagraphEe: 'The PSTG Electrical Studies division (EE-PSTG) was created to meet the demands of the electricity sector in transmission, generation, distribution and energy storage. Made up of a team that brings together professionals with more than 20 years experience and young talents, this division combines tradition and innovation to offer services that meet the highest standards in terms of time, quality and cost, making it a competitive consulting firm in both the national and international markets.'
        },
        footer: {
            contactsTitle: 'CONTACTS'
        }
    },

    'es': {
        header: {
            contacts: 'CONTACTOS'
        },
        main: {
            aboutUsTitle: 'QUIÉNES SOMOS',
            projectsTitle: 'PROYECTOS',
            activitiesTitle: 'ACTIVIDADES',
            concludedSubT: 'CONCLUIDOS',
            runningSubT: 'EN CURSO',
            coursesSubT: 'CURSOS',
            servicesSubT: 'SERVICIOS',
            welcomeTi: '¡Bienvenido a la división de TI de PSTG!',
            welcomeEe: '¡Bienvenido a la división de EE de PSTG!',
            aboutUsParagraphTi: 'PSTG presenta con orgullo su División de TI (TI-PSTG), especializada en desarrollo de software para diversas áreas de la ingeniería. Con un equipo de desarrolladores altamente calificados e ingenieros multidisciplinarios, entre maestros y doctores con más de 20 años de experiencia, más de 200 proyectos completados, nuestra misión es liderar la innovación y la eficiencia en sus proyectos de ingeniería.',
            aboutUsParagraphEe: 'La división de Estudios Eléctricos del PSTG (EE-PSTG) fue creada para atender las demandas del sector eléctrico en transmisión, generación, distribución y almacenamiento de energía. Compuesta por un equipo que reúne profesionales con más de 20 años de experiencia y jóvenes talentos, esta división combina tradición e innovación para ofrecer servicios que cumplen con los más altos estándares de plazo, calidad y coste, convirtiéndose en una empresa de consultoría competitiva tanto a nivel nacional como mercado internacional.'
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
    document.querySelector('a[href="#contacts"]').textContent = texts.header.contacts;

    // Atualiza os títulos principais (main)
    document.querySelector('.initial h1').textContent = texts.main.aboutUsTitle;
    document.querySelector('#projects h1').textContent = texts.main.projectsTitle;
    document.querySelector('#development h1').textContent = texts.main.developmentTitle;
    document.querySelector('#activities').textContent = texts.main.activitiesTitle;
    document.querySelector('#concluded').textContent = texts.main.concludedSubT;
    document.querySelector('#running').textContent = texts.main.runningSubT;
    document.querySelector('#courses').textContent = texts.main.coursesSubT;
    document.querySelector('#services').textContent = texts.main.servicesSubT;

    // Atualiza o conteúdo principal (main)
    document.querySelector('#welcometi h1').textContent = texts.main.welcomeTi;
    document.querySelector('#welcomeee h1').textContent = texts.main.welcomeEe;
    document.querySelector('#aboutusparagraphti').textContent = texts.main.aboutUsParagraphTi;
    document.querySelector('#aboutusparagraphee').textContent = texts.main.aboutUsParagraphEe;

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
