// to do named exports:
// export const THINGS = ['one', 'two'];

export default function linksForPayload(payload) {
  const links = {};
  const relationships = Object.keys(payload).filter((k) => {
    return k.includes('_url');
  });

  relationships.forEach((r) => {
    const name = r.replace(/_url/, '');
    links[name] = payload[r];
  });

  return links;
}
