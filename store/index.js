export const state = () => ({
  introduction: {
    questions: {
      allowed: undefined,
    },
    isValid: false,
  },

  backgroundExperience: {
    isValid: false,
    questions: {
      knowledgeLevel: undefined,
      knowledgeSource: undefined,
      years: undefined,
    },
  },
})

export const getters = {
  formValid(s) {
    return Object.keys(s).every((section) => s[section].isValid)
  },
  answers(s) {
    return Object.keys(s).reduce((acc, section) => {
      acc[section] = { ...s[section].questions }

      if (!acc[section].isUsed) {
        acc[section].comments = ''
        acc[section].statements = undefined
      }

      return acc
    }, {})
  },
  progress(s) {
    const n = Object.keys(s).reduce((acc, section) => {
      return s[section].isValid ? acc + 1 : acc
    }, 0)

    const N = Object.keys(s).length

    return n / N
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

  setBackgroundExperienceKnowledgeLevel(s, level) {
    s.backgroundExperience.questions.knowledgeLevel = level
  },
  setBackgroundExperienceKnowledgeSource(s, source) {
    s.backgroundExperience.questions.knowledgeSource = source
  },
  setBackgroundExperienceYears(s, years) {
    s.backgroundExperience.questions.years = years
  },
  setBackgroundExperienceValid(s, valid) {
    s.backgroundExperience.isValid = valid
  },

  initPattern(s, name) {
    s[name] = { isValid: false, questions: {} }
  },
  setPattern(s, { name, answers }) {
    s[name].questions = { ...answers }
  },
  setPatternValid(s, { name, valid }) {
    s[name].isValid = valid
  },
}
