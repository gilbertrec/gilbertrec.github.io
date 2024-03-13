// TODO Add a couple lines about each project
const data = [
  {
    title: 'A Multivocal Literature Review of MLOps Tools and Features',
    subtitle: 'Literature Review of MLOps tools used in state-of-the-practice and comparison of theirs main features.',
    image: '/images/projects/mlops.png',
    authors: 'G.Recupito, F. Pecorelli, G. Catolino, S. Moreschini∗, D. Di Nucci§, F. Palomba§, and D. A. Tamburri,',
    conference: 'Euromicro SEAA 2022',
    date: '2022-06-1',
    desc:
      'To this aim, we conducted a Multivocal Literature Review (MLR) to (i) extract tools that allow for and support the creation of MLOps pipelines and (ii) analyze their main characteristics and features to provide a comprehensive overview of their value. Overall, we investigate the functionalities of 13 MLOps Tools. Our results show that most MLOps Tools support the same features but apply different approaches that can bring different advantages, depending on user requirements.',
    link: '/personal_doc/publications/2022113916.pdf',
  },
  {
    title: 'Unmasking Data Secrets: An Empirical Investigation into Data Smells and Their Impact on Data Quality',
    subtitle: 'Analysis of Data Smells  updating existing SLRs and correlation analysis on Data Quality',
    image: '/images/projects/mlops.png',
    authors: 'G. Recupito, R. Rapacciuolo, D. Di Nucci, F. Palomba',
    conference: 'CAIN 2024',
    date: '2024-01-28',
    desc:
      'In this paper, we expanded the current body of knowledge on data smells by proposing a two-step investigation into the matter. First, we updated an existing literature review in an effort of cataloguing the currently existing data smells and the tools to detect them. Afterward, we assess the prevalence of data smells and their correlation with data quality metrics. We identify a novel set composed of 12 data smells distributed across three additional categories.',
    link: '/personal_doc/publications/C2.pdf',
  },
  {
    title: 'When Code Smells Meet ML: On the Lifecycle of ML-specific Code Smells in ML-enabled Systems',
    subtitle: 'Investigating the Emergence and Evolution of ML-specific Code Smells',
    authors: 'G. Recupito, G. Giordano, F. Ferrucci, D. Di Nucci, F. Palomba',
    conference: 'MSR 2024 - Registered Report Track',
    date: '2024-03-12',
    desc: 'The paper investigates the emergence and evolution of ML-specific code smells, which are sub-optimal implementation solutions applied on ML pipelines that may decrease both the quality and maintainability of ML-enabled systems. The authors present a plan to study ML-specific code smells by empirically analyzing their prevalence in real ML-enabled systems, how they are introduced and removed, and their survivability. They propose conducting an exploratory study, mining a large dataset of ML-enabled systems, and analyzing over 400k commits about 337 projects. They plan to track and inspect the introduction and evolution of ML smells through CodeSmile, a novel ML smell detector built for this investigation.',
    link: '/personal_doc/publications/C3.pdf',
},


  
];

export default data;
