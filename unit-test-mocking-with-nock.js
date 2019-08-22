// test.js
// ---------------
const expect = require('chai').expect;
const nock = require('nock');

const getUser = require('../index').getUser;
const response = require('./response');

describe('Get User tests', () => {
  beforeEach(() => {
    nock('https://api.github.com')
      .get('/users/octocat')
      .reply(200, response);
  });

  it('Get a user by username', () => {
    return getUser('octocat')
      .then(response => {
        //expect an object back
        expect(typeof response).to.equal('object');

        //Test result of name, company and location for the response
        expect(response.name).to.equal('The Octocat')
        expect(response.company).to.equal('GitHub')
        expect(response.location).to.equal('San Francisco')
      });
  });
});

 // test/response.js
//-------------------------------

module.exports = { login: 'octocat',
  id: 583231,
  avatar_url: 'https://avatars0.githubusercontent.com/u/583231?v=3',
  gravatar_id: '',
  url: 'https://api.github.com/users/octocat',
  html_url: 'https://github.com/octocat',
  followers_url: 'https://api.github.com/users/octocat/followers',
  following_url: 'https://api.github.com/users/octocat/following{/other_user}',
  gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
  organizations_url: 'https://api.github.com/users/octocat/orgs',
  repos_url: 'https://api.github.com/users/octocat/repos',
  events_url: 'https://api.github.com/users/octocat/events{/privacy}',
  received_events_url: 'https://api.github.com/users/octocat/received_events',
  type: 'User',
  site_admin: false,
  name: 'The Octocat',
  company: 'GitHub',
  blog: 'http://www.github.com/blog',
  location: 'San Francisco',
  email: null,
  hireable: null,
  bio: null,
  public_repos: 7,
  public_gists: 8,
  followers: 1840,
  following: 6,
  created_at: '2011-01-25T18:44:36Z',
  updated_at: '2017-07-06T21:26:58Z' };


