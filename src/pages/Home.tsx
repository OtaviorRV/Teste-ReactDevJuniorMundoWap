import Header from "../components/header/Header";
import  Container  from "../components/container/Container";
import TableTask from "../components/table/Table";

const Home = () => {
  return (
    <>
      <Header title="Tarefas Pendentes " />
      <Container>
        <TableTask />
      </Container>
    </>
  );
};

export default Home;
