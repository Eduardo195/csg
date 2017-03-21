/* eslint no-plusplus: 0 */
let i = 0;

module.exports = {
  CONTACT_DETAILS_NOT_FOUND: {
    code: `service_nif_${i++}`,
    msg: 'Contact details not found'
  },
  NIF_SERVER_UNREACHEABLE: {
    code: `service_nif_${i++}`,
    msg: 'NIF server unreachable'
  }
};
