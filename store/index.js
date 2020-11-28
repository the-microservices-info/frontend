export const state = () => ({
  introduction: {
    questions: {
      allowed: undefined,
    },
    isValid: false,
  },
})

export const getters = {
  formValid(s) {
    return Object.keys(s).every((section) => s[section].isValid)
  },
}

export const mutations = {
  setIntroductionAllow(s, allowed) {
    s.introduction.questions.allowed = allowed
  },
  setIntroductionValid(s) {
    s.introduction.isValid = true
  },
  setIntroductionInvalid(s) {
    s.introduction.isValid = false
  },
}
