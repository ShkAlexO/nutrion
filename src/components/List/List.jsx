function List({ data, Component }) {
  return (
    <>
      {data.map((item) => (
        <Component key={item.id} {...item} />
      ))}
    </>
  );
}

export default List;
