import './App.css';
import { 
  withAuthenticator, 
  Authenticator, 
  Flex, 
  Button,
  View
} from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';
import ProfileList from './containers/ProfileList'

function App() {
  return (
      <Authenticator>
      {({ signOut, user }) => (
          <Flex
            minHeight="100vh"
            direction="column"
            justifyContent="stretch"
            gap="0">
              <Flex 
                as="menu"
                alignItems="center"
                justifyContent="space-between"
                padding=".5rem"
                backgroundColor="var(--amplify-primary-color)"
                boxShadow="0 0 8px var(--amplify-secondary-color)"
              >
                <span>
                  Hello {user.attributes.email}
                </span>
                <Button onClick={signOut} variation="link">
                    Sign out
                </Button>
              </Flex>
              <View 
                as="main"
                flex="1 1 auto"
                padding="1rem">
                  <ProfileList user={user}/>
              </View>
              <Flex as="footer" padding="1rem" backgroundColor="var(--amplify-tertiary-color)">
                Im a footer
              </Flex>
          </Flex>
     
    )}
    </Authenticator> 
  );
}

export default withAuthenticator(App);
