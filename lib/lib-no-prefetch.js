const libFunc = async () => {
    import('./dep').then((res) => {
        res.default();
        console.log('lib');
    })
}

export default libFunc;