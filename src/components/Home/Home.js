import React from "react";
import { Link } from "react-router-dom";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { useGetCryptosQuery } from "../../services/cryptoApi";

const { Title } = Typography;
function Home() {
  const { data } = useGetCryptosQuery();
  console.log(data);
  return (
    <>
      <Title level={3} className="heading">
        Global Crypto Stats
        <Row>
          <Col span={12}>
            <Statistic title="Total cryptocurriencies" value={5} />
          </Col>
          <Col span={12}>
            <Statistic title="Total Exchange" value={5} />
          </Col>
          <Col span={12}>
            <Statistic title="Total Market Cap" value={5} />
          </Col>
          <Col span={12}>
            <Statistic title="Total 24h Volume" value={5} />
          </Col>
          <Col span={12}>
            <Statistic title="Total Markets" value={5} />
          </Col>
        </Row>
      </Title>
    </>
  );
}

export default Home;
