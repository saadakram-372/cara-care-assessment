/**
 * This is file will contain all of the generic functions for performing the CRUD functions i.e, POST, GET, PATCH, DELETE etc.
 * If you need to perform any of the above action you can call any of the following function and pass in following parameters:
 * @param {string} url
 * @param {string} link
 * @returns {object} response
 */

export const apiGet = async (url, link) => {
  const response = await fetch(`${url}${link}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response;
};
