module.exports = {
    autodiscover: false,
    gitAuthor: "Renovate Bot <bot@renovateapp.com>",
    onboarding: false,
    platform: "github",
    forkProcessing: "disabled",
    prHourlyLimit: 0,
    repositories: ['rbel-io/renovate-test-project2'],
    timezone: "Europe/Amsterdam",
    // Testing no majors except github actions
    major: false,
    packageRules: [
        {
            matchManagers: ["github-actions"],
            major: true
        }
    ]
};

