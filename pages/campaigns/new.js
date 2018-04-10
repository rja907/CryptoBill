import React, { Component } from 'react';
import Layout from '../../components/Layout';
import {Button, Form, Input, Message} from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

class CampaignNew extends Component {
  state = {
    minimumContribution: '',
    errorMessage: ''
  };

  onSubmit = async (event) => {
    //to prevent form submittal to backend server
    event.preventDefault();
    try{
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({
          from: accounts[0]
        });
    } catch(err) {
      this.setState({ errorMessage: err.message.toString().split('\n')[0] });
    }
  };

  render () {
    return (
      <Layout>
        <h1>
          Create a Campaign!
        </h1>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>
              Minimum Contribution
            </label>
            <Input
            label="wei"
            labelPosition="right"
            value={this.state.minimumContribution}
            onChange={event =>
              this.setState({ minimumContribution: event.target.value})}
            />
          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button
          primary
          >
            Create!
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
