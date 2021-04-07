const libFunc = async () => {
    import(/* webpackPrefetch: true */ './dep').then((res) => {
        res.default();
        console.log('lib');
    })
}

export default libFunc;