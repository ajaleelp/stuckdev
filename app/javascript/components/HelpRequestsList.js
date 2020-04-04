import React from "react"
import PropTypes from "prop-types"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const HelpRequestsList = props => {
  const requestCard = req => (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
      <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          { req.topic }
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
          { req.created_at }
      </p>
    </div>
    <div>
      <dl>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm leading-5 font-medium text-gray-500">
            Help Group
          </dt>
          <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            { req.help_group_id }
          </dd>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm leading-5 font-medium text-gray-500">
            Status
          </dt>
          <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            Pending
          </dd>
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm leading-5 font-medium text-gray-500">
            Details
          </dt>
          <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            { req.details }
          </dd>
        </div>
      </dl>
    </div>
    </div>
  );
  const sentRequestsList = props.sentRequests.map((request) =>
    <div key={request.id}>{requestCard(request)}</div>
  );
  const receivedRequestsList = props.receivedRequests.map((request) =>
    <div key={request.id}>{requestCard(request)}</div>
  );
  return (
    <Tabs>
      <TabList className="flex flex-col sm:flex-row mb-3">
        <Tab className="text-gray-600 py-4 px-6 block hover:text-green-500 focus:outline-none"
             selectedClassName="text-green-500 border-b-2 font-medium border-green-500">Sent</Tab>
        <Tab className="text-gray-600 py-4 px-6 block hover:text-green-500 focus:outline-none"
             selectedClassName="text-green-500 border-b-2 font-medium border-green-500">Received</Tab>
      </TabList>

      <TabPanel>{sentRequestsList}</TabPanel>
      <TabPanel>{receivedRequestsList}</TabPanel>
    </Tabs>
  );
};

HelpRequestsList.defaultProps = {
  sentRequests: [],
  receivedRequests: []
};

HelpRequestsList.propTypes = {
  sentRequests: PropTypes.array,
  receivedRequests: PropTypes.array
};

export default HelpRequestsList
