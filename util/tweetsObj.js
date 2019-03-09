function filterParams(collection) {
    let newcollection = collection.map(elem => ({
        created_at: elem.created_at,
        id_str: elem.id_str,
        text: elem.text
    }));
    return newcollection;
}

module.exports = {
    filterParams
}