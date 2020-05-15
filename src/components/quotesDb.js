 const quotes=[
     {
         "quote": "Я не провалил тест, я просто нашел 100 способов сделать его неправильно",
         "author": "Benjamin Franklin"
     },
    {
        "quote": "77% JavaScript разработчиков плохо знают математику. Хорошо, что я нахожусь в оставшихся 33%.",
        "author": "Не любой программист"
    },
    // {
    //     "quote":"Низкоуровневый язык — это когда требуется внимание к вещам, которые никак не связаны с программами на этом языке.",
    // "author": "Alan J. Perlis"
    // },
    {
        "quote":"Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили.",
        "author": "Mosher’s Law of Software Engineering"
    },
    {
        "quote":"В хорошем дизайне добавление чего-то стоит дешевле, чем сама эта вещь.",
        "author": "Thomas C. Gale"
    },
    {
        "quote":"В теории, теория и практика неразделимы. На практике это не так.",
        "author": "Yoggi Berra"
    },
    {
        "quote":"Я изобрел понятие «объектно-ориентированный», и могу заявить, что не имел в виду C++.",
        "author": "Alan Kay"
    },
    {
        "quote":"Иногда лучше остаться спать дома в понедельник, чем провести всю неделю в отладке написанного в понедельник кода.",
        "author": "Christopher Thompson"
    },
    {
        "quote":"Измерять продуктивность программиста подсчетом строк кода — это так же, как оценивать постройку самолета по его весу.",
        "author": "Bill Gates"
    },
    // {
    //     "quote":"Многие из вас знакомы с достоинствами программиста. Их всего три, и разумеется это: лень, нетерпеливость и гордыня.",
    //     "author": "Larry Wall"
    // },
    // {
    //     "quote":"Большинство хороших программистов делают свою работу не потому, что ожидают оплаты или признания, а потому что получают удовольствие от программирования.",
    //     "author": "Linus Torvalds"
    // },
    {
        "quote":"Всегда пишите код так, будто сопровождать его будет склонный к насилию психопат, который знает, где вы живете.",
        "author":"Martin Golding"
    },
    {
        "quote":"Если вы дадите человеку программу, то займете его на один день. Если вы научите человека программировать, то займете его на всю жизнь.",
        "author":"Waseem Latif"
    },
    {
        "quote": "Язык, который не меняет вашего представления о программировании, недостоин изучения.",
        "author": "Alan J. Perlis"
    },
    {
        "quote":"Мы наблюдаем общество, которое все больше зависит от машин, но при этом использует их все неэффективнее.",
        "author": "Douglas Rushkoff"
    },
    {
        "quote":" Иногда лучшие программы создаются на бумажке. Запрограммировать их — второстепенная вещь.",
        "author":"Max Kanat-Alexander"
    },
    // {
    //     "quote":"Любой дурак сможет написать код, который поймет машина. Хорошие программисты пишут код, который сможет понять человек.",
    //     "author":"Martin Fowler"
    // },
    {
        "quote":"Программирование — это разбиение чего-то большого и невозможного на что-то маленькое и вполне реальное.",
        "author":"Jazzwant"
    },
    {
        "quote":"Программисты — не математики, как бы нам этого ни хотелось.",
        "author":"Richard P. Gabriel"
    },
    // {
    //     "quote":"Программирование — это сложно. Основные правила, на которых все строится, очень просты, но по мере разработки программа сама начинает вводить свои правила и законы. Таким образом, программист строит лабиринт, в котором сам же может и потеряться.",
    //     "author":"Marijn Haverbeke"
    // },
    {
        "quote":"Простота — залог надежности.",
        "author":"Edsger W. Dijkstra"
    },
    {
        "quote":"Работает? Не трогай.",
        "author":"Любой программист"
    },
    {
        "quote":"Java — это C++, из которого убрали все пистолеты, ножи и дубинки.",
        "author":"James Gosling"
    },
    {
        "quote": "Если бы в Java действительно работала сборка мусора, большинство программ бы удаляли сами себя при первом же запуске.",
        "author": "Robert Sewell"
    },
    {
        "quote": "Есть всего два типа языков программирования: те, на которые люди всё время ругаются, и те, которые никто не использует.",
        "author": "Bjarne Stroustrup"
    },
    {
        "quote": "Насколько проще было бы писать программы, если бы не заказчики.",
        "author": "R. S. Martin"
    },
    // {
    //     "quote": "Аналогично тому, как написание картины является искусством для души, так и написание программы является искусством для разума.",
    //     "author": "Volnik"
    // },
    {
        "quote": "Нельзя доверять коду, который вы не написали полностью сами.",
        "author": "Ken Thompson"
    },
    {
        "quote": "Если вы считаете, что С++ труден, попытайтесь выучить английский.",
        "author": "Bjarne Stroustrup"
    },
    {
        "quote": "Лень — главное достоинство программиста.",
        "author": "Larry Wall"
    },
    // {
    //     "quote": "Плюсы быть программистом: Ты можешь работать когда угодно и где угодно. Минусы быть программистом: Ты можешь работать когда угодно и где угодно.",
    //     "author": "Любой программист"
    // },

    {
        "quote": "Программисты странные люди. Когда они копипастят код, они чувствуют себя виноватыми, а вот когда перепечатывают его—нет.",
        "author": "Любой программист"
    },
    // {
    //     "quote": "Мой самый большой страх в том, что когда-нибудь я столкнусь с задачей, которая не решена на StackOverflow, и мне придется переделывать весь проект с нуля.",
    //     "author": "Любой программист"
    // },
    {
        "quote": "У меня есть два состояния: 1) Я могу запрогать все что угодно. 2) Что такое компьютер?",
        "author": "Любой программист"
    },
    {
        "quote": "Вы знаете, когда совет «живи моментом» лучше всего подходит? В пятницу, когда ты деплоишь на прод.",
        "author": "Любой программист"
    },
    {
        "quote": "Поставил себе план на неделю — пофиксить все 5 багов на проекте. Осталось 9.",
        "author": "Любой программист"
    },
    {
        "quote": "Когда играю в игры, так сохраняюсь каждые 5 минут, а как разрабатываю код, то git commit -am \"some changes\" (+647, -1049).",
        "author": "Любой программист"
    }
];

 export default quotes;