import * as actionTypes from './types';

export function setWorkTitle(title) {
  return {
    type: actionTypes.SET_WORK_TITLE,
    title,
  };
}

export function setWorkLocation(location) {
  return {
    type: actionTypes.SET_WORK_LOCATION,
    location,
  };
}

export function setWorkRole(role) {
  return {
    type: actionTypes.SET_WORK_ROLE,
    role,
  };
}

export function setWorkEmployer(employer) {
  return {
    type: actionTypes.SET_WORK_EMPLOYER,
    employer,
  };
}
export function setWorkContractType(contractType) {
  return {
    type: actionTypes.SET_WORK_CONTRACT_TYPE,
    contractType,
  };
}

export function setWorkMinPay(value) {
  return {
    type: actionTypes.SET_WORK_MIN_PAY,
    value,
  };
}

export function setWorkMaxPay(value) {
  return {
    type: actionTypes.SET_WORK_MAX_PAY,
    value,
  };
}

export function setWorkPayRange(range) {
  return {
    type: actionTypes.SET_WORK_PAY_RANGE,
    range,
  };
}

export function setWorkPayCriteria(criteria) {
  return {
    type: actionTypes.SET_WORK_PAY_CRITERIA,
    criteria,
  };
}

export function setWorkWriteUp(markdown) {
  return {
    type: actionTypes.SET_WORK_WRITE_UP,
    markdown,
  };
}
