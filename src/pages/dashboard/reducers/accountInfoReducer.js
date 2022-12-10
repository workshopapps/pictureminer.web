import { actions } from '../actions/actions';

export function accountInfoReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case actions.inputChanged: {
      return {
        ...state,
        isTouched: true,
        isFormValueEmpty: false,
        isSubmitting: false,
        errorMessages: {},
      };
    }
    case actions.formSubmitted: {
      return {
        ...state,
        isSubmitting: true,
        errorMessages: payload,
      };
    }
    case actions.isSubmitting: {
      return {
        ...state,
        isSubmitting: true,
        errorMessages: payload,
      };
    }
    case actions.accountUpdated: {
      return {
        ...state,
        isSubmitting: false,
        success: false,
        isTouched: false,
        successMessage: 'Details updated successfully',
      };
    }
    case actions.isNotSubmitting: {
      return {
        ...state,
        isSubmitting: false,
      };
    }
    case actions.isFormEmpty: {
      return {
        ...state,
        isFormValueEmpty: payload,
      };
    }
    case actions.toggleSuccessMessage: {
      return {
        ...state,
        successMessage: '',
      };
    }
    case actions.isPasswordMatch: {
      return {
        ...state,
        success: true,
      };
    }
    case actions.cancelForm: {
      return {
        ...state,
        isTouched: false,
        errorMessages: '',
      };
    }

    default:
      break;
  }
}
