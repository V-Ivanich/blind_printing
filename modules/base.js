const baseStr = {
  flag:'1',
  words: [
  "A switch statement first evaluates its expression. It th",
  "It then looks for the first case clause whose expr essio",
  "ession evaluates to the same value as the result of the,",
  "f the input expression (using the strict comparison, ===",
  "n, ===) and transfers control to that clause, executing.",
  "uting the associated statements. (If multiple cases matc",
  "s match the provided value, the first case that matches,",
  "tches is selected, even if the cases are not equal to ea",
  "to each other.) If no matching case clause is found, the",
  "d, the program looks for the optional default clause, an",
  "se, and if found, transfers control to that clause, exec",
  "a executing the associated statements. If no default cla",
  "lt clause is found, the program continues execution at t",
  "n at the statement following the end of switch. By Cconv",
  "Cconvention, the default clause is the last clause, buts",
  "a but it does not need to be so. The optional break stat",
  "k statement associated with each case label ensures that",
  "s that the program breaks out of switch once the matched",
  "atched statement is executed and continues execution at.",
  "on at the statement following switch. If break issomitte",
  "omitted, the program continues execution at the next sta",
  "xt statement in the switch statement. The break statemen",
  "atement is not required if a return statement precedes i",
  "edes it. Examples Using switch In the following example,",
  "ample, if expr evaluates to Bananas, the program matches",
  "atches the value with case case 'Bananas' and executes t",
  "utes the associated statement. When break is encountered",
  "ntered, the program breaks out of switch and executes th",
  "tes the statement following switch. If break weresomitte",
  "omitted, the statement for the case 'Cherries' wou JavaS",
  "JavaScript and Java are similar in some ways but fundame",
  "undamentally different in some others. The JavaScript la",
  "ipt language resembles Java but does not have Java's sta",
  "is static typing and strong type checking. JavaScript fo",
  "ipt follows most Java expression syntax, naming conventi",
  "nventions and basic control-flow constructs whichwas the",
  "was the reason why it was renamed from LiveScript to Jav",
  "to JavaScript. In contrast to Java's compile-time system",
  "system of classes built by declarations, JavaScript supp",
  "t supports a runtime system based on a small number of d",
  "r of data types representing numeric, Boolean, and strin",
  "string values. JavaScript has a prototype-based object m",
  "bject model instead of the more common class-based objec",
  "d object model. The prototype-based model provides dynam",
  "s dynamic inheritance; that is, what is inherited can va",
  "can vary for individual objects. JavaScript also support",
  "upports functions without any special declarative requir",
  "requirements. Functions can be properties of objects, ex",
  "ts, executing as loosely typed methods. JavaScriptis a v",
  "is a very free-form language compared to Java. You do no",
  "u do not have to declare all variables, classes, and met",
  "and methods. You do not have to be concerned with, wheth",
  "whether methods are public, private, or protected and yo",
  "and you do not have to implement interfaces. Variables,.",
  "ables, parameters, and function return types are not exp",
  "not explicitly typed. Object-oriented. write to objects.",
  "Class fields are public by default, but private class me",
  "mbers can be created by using a hash # prefix. The priva",
  "cy encapsulation of these class features is enforced by-",
  "JavaScript itself. Private members are not native to the",
  "language before this syntax existed. In prototypical inh",
  "eritance, its behavior may be emulated with WeakMap obje",
  "cts or closures, but they can't compare to the # syntax.",
  "in terms of ergonomics. Private instance fields are decl",
  "ared with # names (pronounced 'hash names'), which are i",
  "dentifiers prefixed with #. The # is a part of the name-",
  "itself. Private fields are accessible on the class const",
  "ructor from inside the class declaration itself. They ar",
  "used for declaration of field names as well as for acces",
  "sing a field's value. Private members are not write thes",
  "When it comes to inheritance, JavaScript only has one co",
  "nstruct: objects. Each object has a private property whi",
  "ch holds a link to another object called its prototype..",
  "That prototype object has a prototype of its own, and so",
  "on until an object is reached with null as its prototype",
  "By definition, null has no prototype, and acts as the fi",
  "nal link in this prototype chain. Nearly all objects Jav"
],
words_ru: [
  "Бывший чиновник интендантского управления, отставной кол",
  "лежский секретарь Лахматов, сидел у себя за столом и, вы",
  "пивая шестнадцатую рюмку, размышлял о братстве, равенств",
  "е и свободе. Вдруг из-за лампы выглянул на него чёрт. Но",
  "не пугайтесь, читательница. Вы знаете, что такое чёрт? Э",
  "то молодой человек приятной наружности, с черной, как са",
  "поги, рожей и с красными выразительными глазами. На голо",
  "ве у него, хотя он и не женат, рожки… Прическа а la Капу",
  "ль. Тело покрыто зеленой шерстью и пахнет псиной. Внизу.",
  "спины болтается хвост, оканчивающийся стрелой… Вместо па",
  "льцев — когти, вместо ног — лошадиные копыта. Лахматов,'",
  "увидев чёрта, несколько смутился, но потом, вспомнив, чт",
  "о зеленые черти имеют глупое обыкновение являться ко все",
  "м вообще подвыпившим людям, скоро успокоился. С кем я им",
  "ею честь говорить? —обратился он к непрошенному гостю. Ч",
  "ёрт сконфузился и потупил глазки. Вы не стесняйтесь, — п",
  "родолжал Лахматов. — Подойдите ближе… Я человек без пред",
  "рассудков, и вы можете говорить со мной искренно… по душ",
  "е… Кто вы? Чёрт нерешительно подошел к Лахматову и, подо",
  "гнув под себя хвост, вежливо поклонился.Я чёрт, или дьяв",
  "ол… — отрекомендовался он. — Состою чиновником особых по",
  "ручений при особе его превосходительства директора адско",
  "й канцелярии г. Сатаны! — Слышал, слышал… Очень приятно.",
  "Садитесь! Не хотите ли водки? Очень рад… А чем вы занима",
  "етесь? Чёрт еще больше сконфузился. — Собственно говоря,",
  "занятий у меня определенных нет… — ответил он, в смущени",
  "кашляя и сморкаясь в «Ребус». — Прежде, действительно, у",
  "нас было занятие… Мы людей искушали… совращали их с пути",
  "добра на стезю зла… Теперь же это занятие, антр-ну-суади",
  "1, и плевка не стоит… Пути добра нет уже, не с чего совр",
  "ащать. И к тому же люди стали хитрее нас… Извольте-ка вы",
  "искусить человека, когда он в университете все науки кон",
  "чил, огонь, воду и медные трубы прошел! Как я могу учить",
  "вас украсть рубль, ежели вы уже без моей помощи тысячи ц",
  "апнули?— Это так… Но, однако, ведь вы занимаетесь же чем",
  "-нибудь?— Да… Прежняя должность наша теперь может быть т",
  "олько поминальной, но мы все-таки имеем работу… Искушаем",
  "классных дам, подталкиваем юнцов стихи писать, заставляе",
  "м пьяных купцов бить зеркала… В политику же, в литератур",
  "у и в науку мы давно уже не вмешиваемся… Ни рожна мы в э",
  "том не смыслим… Многие из нас сотрудничают в «Ребусе», е",
  "сть даже такие, которые бросили ад и поступили в люди… Э",
  "ти отставные черти, поступившие в люди, женились на бога",
  "тых купчихах и отлично теперь живут. Одни из них занимаю",
  "тся адвокатурой, другие издают газеты, вообще очень дель",
  "ные и уважаемые люди!— Извините за нескромный вопрос: ка",
  "кое содержание вы получаете?— Положение у нас прежнее-с…",
  "— ответил чёрт. — Штат нисколько не изменился… По-прежне",
  "му квартира, освещение и отопление казенные… Жалованья ж",
  "е нам не дают, потому что все мы считаемся сверхштатными",
  "и потому что чёрт — должность почетная… Вообще, откровен"
]
}
export const basEngl = baseStr;