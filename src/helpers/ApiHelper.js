const tryCatch = async function(callback) {
  try {
    return callback();
  } catch (error) {
    return {
      error: true,
      statusCode: 500,
      message: error.errmsg || "Something happens",
      errors: error.errors
    };
  }
}

const apiSendSuccess = (data, message, code = 200) => {
  return {
    code,
    message,
    data,
  }
}

const apiSendError = (data, message, code = 500) => {
  return {
    code,
    message,
    data,
  }
}

export {
  tryCatch,
  apiSendError,
  apiSendSuccess
}