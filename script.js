const data = [
    {
        name: "market street",
        url: "/north-america/canada/montreal/market-street",
        children: [],
    },
    {
        name: "Europe",
        url: "/europe",
        children: [],
    },
    {
        name: "Spain",
        url: "/europe/spain",
        children: [],
    },
    {
        name: "Italy",
        url: "/europe/italy",
        children: [],
    },
    {
        name: "Germany",
        url: "/europe/germany",
        children: [],
    },

    {
        name: "Africa",
        url: "/africa",
        children: [],
    },
    {
        name: "Morocco",
        url: "/africa/morocco",
        children: [],
    },
    {
        name: "Marrakesh",
        url: "/africa/morocco/marrakesh",
        children: [],
    },
    {
        name: "Congo",
        url: "/africa/congo",
        children: [],
    },
    {
        name: "North America",
        url: "/north-america",
        children: [],
    },
    {
        name: "Canada",
        url: "/north-america/canada",
        children: [],
    },
    {
        name: "Montreal",
        url: "/north-america/canada/montreal",
        children: [],
    },
    {
        name: "Vancouver",
        url: "/north-america/canada/vancouver",
        children: [],
    },
    {
        name: "Berlin",
        url: "/europe/germany/berlin",
        children: [],
    },
    {
        name: "Greenland",
        url: "/north-america/greenland",
        children: [],
    },
];

const sortDataPerLevel = (data) =>
    data.reduce((dataPerLevel, item) => {
        const i = item.url.slice(1).split("/").length;

        if (dataPerLevel[i]) {
            dataPerLevel[i].push(item);
        } else {
            dataPerLevel[i] = [item];
        }

        return dataPerLevel;
    }, {});

const addChildren = (item, children) =>
    children.forEach((ch) => {
        item.children.push(ch);
        ch.parent = item;
    });
const nestData = (data) => {
    const entries = Object.entries(data);

    entries.forEach(([i, items]) => {
        items.forEach((it) => {
            const nextLevelItems = data[+i + 1];

            if (nextLevelItems) {
                const children = nextLevelItems.filter(({ url }) =>
                    url.startsWith(it.url)
                );
                addChildren(it, children);
            }
        });
    });
};

const dataPerLevel = sortDataPerLevel(data);
nestData(dataPerLevel);

const test = Object.values(dataPerLevel)[0];
console.log(test);
