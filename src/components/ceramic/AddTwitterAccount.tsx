import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { useSharedState } from "../../lib/store";
import { useCeramic } from "../../hooks/useCeramic";
import actions from "../../lib/actions";

function createTweetLink(did: string): string {
  const text = encodeURIComponent(
    `Verifying my Twitter account for my decentralized identity ${did} on @ceramicnetwork via @mySelfID.\n\nView my Self.ID here ↓`
  );
  const url = encodeURIComponent(`${document.location.origin}/${did}`);
  return `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
}

export default function AddTwitterAccount() {
  const [{ did, twitter_verified, twitter_username }, dispatch] = useSharedState();
  const { useIdentityLink, useAddTwitterAttestation } = useCeramic();
  const identityLink = useIdentityLink();
  const addTwitterAttestation = useAddTwitterAttestation(identityLink);

  const [challengeLoading, setChallengeLoading] = useState<boolean>(false);
  const [challenge, setChallenge] = useState<string | null>(null);
  const [verifyLoading, setVerifyLoading] = useState<boolean>(false);
  const [twitterUsername, setTwitterUsername] = useState<string | null>(null);

  const router = useRouter();

  const loadChallenge = useCallback(() => {
    if (typeof twitterUsername !== "string" || challengeLoading) return;

    console.log("loading challenge");

    setChallengeLoading(true);

    identityLink.requestTwitter(did, twitterUsername).then(
      (challenge) => {
        setChallenge(challenge);
        console.log("correctly loaded challenge");
        setChallengeLoading(false);
      },
      (err: Error) => setChallengeLoading(false)
    );
  }, [challengeLoading, did, identityLink, twitterUsername]);

  const verify = useCallback(() => {
    if (self == null || challenge == null || typeof twitterUsername !== "string" || verifyLoading) {
      return;
    }

    setVerifyLoading(true);

    addTwitterAttestation(did, twitterUsername, challenge).then(
      () => {
        setVerifyLoading(false);
        dispatch({ type: actions.SET_TWITTER_VERIFIED, payload: true });
      },
      (err: Error) => {
        setVerifyLoading(false);
      }
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [challenge, did, twitterUsername, verifyLoading]);

  const handleSetTwitterUsername = () => {
    if (!twitterUsername) return;
    dispatch({ type: actions.SET_TWITTER_USERNAME, payload: twitterUsername });
  };

  return (
    <>
      {!twitter_username ? (
        <div className="mt-4 w-full flex gap-3">
          <input
            type="text"
            onChange={(u) => setTwitterUsername(u.target.value)}
            className="bg-white block w-72 rounded-md px-3 py-1 text-black focus:outline-indigo-500"
            placeholder="yourname"
          />
          <button
            className="w-auto px-4 py-1 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md"
            onClick={handleSetTwitterUsername}
          >
            Start verification process
          </button>
        </div>
      ) : (
        <div className="mt-4">
          <div className="bg-slate-200 text-black mb-4 p-4 rounded-md w-full">
            <div className="flex items-center justify-between w-full gap-3">
              <p className="p-2 text-xl font-bold">Step 1</p>
              <p>Click this button to load the attestation challenge.</p>

              {challengeLoading ? (
                <button
                  disabled
                  className="w-28 py-1 bg-gray-500 text-lg text-white rounded-lg font-medium"
                >
                  loading...
                </button>
              ) : (
                <button
                  className="w-28 py-1 bg-indigo-500 hover:bg-indigo-600 text-lg text-white rounded-lg font-medium
              disabled:bg-gray-500"
                  disabled={verifyLoading || !!challenge}
                  onClick={loadChallenge}
                >
                  Load
                </button>
              )}
            </div>
          </div>
          <div className="bg-slate-200 text-black mb-4 p-4 rounded-md w-full">
            <div className="flex items-center justify-between gap-3">
              <p className="p-2 text-xl font-bold">Step 2</p>
              <div className="flex">
                <p className="mr-1">Tweet a verification from </p>{" "}
                <p className="text-blue-600 font-medium">@{twitterUsername as string}</p>
              </div>

              <a href={createTweetLink(did)} target="_blank" rel="noopener noreferrer">
                <button
                  className="w-28 py-1 bg-blue-500 hover:bg-blue-600 text-lg text-white rounded-lg font-medium
              disabled:bg-gray-500"
                  disabled={challenge == null}
                >
                  Tweet
                </button>
              </a>
            </div>
          </div>
          <div className="bg-slate-200 text-black mb-4 p-4 rounded-md w-full">
            <div className="flex items-center justify-between gap-3">
              <p className="p-2 text-xl font-bold">Step 3</p>
              <p>Verify after having posted the tweet at step 2</p>

              {verifyLoading ? (
                <button disabled>Loading...</button>
              ) : (
                <button
                  className="w-28 py-1 bg-purple-500 hover:bg-purple-600 text-lg text-white rounded-lg font-medium
              disabled:bg-gray-500"
                  disabled={challenge == null}
                  onClick={verify}
                >
                  Verify
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
