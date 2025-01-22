const getParams = (query: string) => {
  query.split("&").reduce((params: any, param) => {
    const [key, value] = param.split("=");
    params[key] = value;
    return params;
  });
};

console.log(getParams("a=1&b=2"));
