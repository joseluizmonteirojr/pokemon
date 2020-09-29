import React from 'react'
import PropTypes from 'prop-types';
import { Button, Label, Select, Option } from './style';

function Pagination({ onChangePrevPage, onChangeNextPage, onChangeLimit, limit }) {
  return (
    <>
        <Pagination
          total={meta.total}
          current={pagination.page ?? 1}
          pageSize={pagination.limit}
          onChange={handleChangePage}
          simple
        />
      <Button id="pagination-prev-button" onClick={onChangePrevPage} disabled={!typeof onChangePrevPage !== 'function'}>Previous</Button>
      <div>
        <Label for="pagination-select-limit">Items per page: </Label>
        <Select id="pagination-select-limit" value={limit} onChange={(event) => onChangeLimit(event.target.value)}>
          <Option value="20">20</Option>
          <Option value="40">40</Option>
          <Option value="60">60</Option>
          <Option value="80">80</Option>
          <Option value="100">100</Option>
        </Select>
      </div>
      <Button id="pagination-next-button" onClick={onChangeNextPage} disabled={!typeof onChangeNextPage !== 'function'}>Next</Button>
    </>
  )
}

Pagination.propTypes = {
  onChangePrevPage: PropTypes.func,
  onChangeNextPage: PropTypes.func,
  onChangeLimit: PropTypes.func,
  limit: PropTypes.number,
}

Pagination.defaultProp = {
  limit: 20,
}

export default Pagination;
