export const ru = {
  cookies: {
    message: `Для корректной работы тем и языков сайт использует <a href="https://developer.mozilla.org/ru/docs/Web/HTTP/Cookies" target="_blank" class="a" rel="nofollow noreferrer">Cookies</a>. Просто держу в курсе`,
    accept: "Хорошо"
  },
  hero: {
    title: "Привет, я Роберт!",
    info: "Я frontend разработчик и UI/UX инженер. Занимаюсь разработкой веб-приложений, преподавательской деятельностью, а ещё люблю играть в шахматы. А это мой сайт портфолио. Добро пожаловать!",
    cv: "Резюме",
    tgchannel: "ТГК",
    vk: "ВК",
    tg: "Телеграм",
    github: "Github",
    gmail: "Написать в Gmail",
    behance: "Behance",
    lichess: "Сыграть со мной в шахматы",
    lang: "Русский"
  },
  skills: {
    stack: "Мой стек",
    education: "Образование",
    basicedu: "МАОУ «Гимназия №4», Основное",
    secondaryedu: "ГАОУ СО «Лицей-интернат №64», «Робототехника», Среднее с отличием",
    bacheloredu: "СГУ им. Чернышевского, «Программная инженерия», Бакалавриат"
  }
}

export const en = {
  cookies: {
    message: `For a correct working of themes and languages, site uses <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies" target="_blank" class="a" rel="nofollow noreferrer">Cookies</a>. Just keepin' you posted`,
    accept: "I agree"
  },
  hero: {
    title: "Hi, I'm Robert!",
    info: "I'm frontend developer and UI/UX engineer. I develop modern web applications, teach students and play some chess. And BTW, this is my portfolio website. Welcome!",
    cv: "Get CV",
    tgchannel: "Blog",
    vk: "VK",
    tg: "Telegram",
    github: "Github",
    gmail: "Contact via Gmail",
    behance: "Behance",
    lichess: "Play chess with me",
    lang: "English"
  },
  skills: {
    stack: "My stack",
    education: "Education",
    basicedu: "MAGEI «Gymnasium No. 4», Basic",
    secondaryedu: "SAGEI SA «Boarding Lyceum No. 64», «Robotics», Secondary excellently",
    bacheloredu: "SSU named after Chernyshevsky, «Software Engineering», Bachelor"
  }
}

export const getLang = (lang: string) => (lang === "en" ? en : ru)