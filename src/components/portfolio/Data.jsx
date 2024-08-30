import work1 from '../../assets/work1.jpg';
import dog from '../../assets/dog.png';
import stats from '../../assets/stats.jpg';
import dozer from '../../assets/dozer.png'

export const projectData = [
    {
        id: 1,
        image: work1,
        title: 'Portfolio',
        category: 'Web',
        link: 'https://mohd-noman-khan.netlify.app/',
        git: 'https://github.com/nomankhan33/portfolio/'
    },
    {
        id: 2,
        image: stats,
        title: 'WhatsStats',
        category: 'AI/ML',
        link: 'https://whatsapp-chat-analyser-noman.streamlit.app/',
        git: 'https://github.com/nomankhan33/WhatsApp-Chat-Analyser/'
    },
    {
        id: 3,
        image: dog,
        title: 'PawIdentify',
        category: 'AI/ML',
        link: 'https://dog-breed-identify-noman.streamlit.app/',
        git: 'https://github.com/nomankhan33/Dog-Breed-Identification/'
    },
    {
        id: 4,
        image: dozer,
        title: 'DozerVal',
        category: 'AI/ML',
        link: '',
        git: 'https://github.com/nomankhan33/Bulldozer-Price-Prediction/'
    },
]

export const projectNav = [
    {
        name: 'All',
    },
    {
        name: 'AI/ML',
    },
    {
        name: 'Web',
    }
]