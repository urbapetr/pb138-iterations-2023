import React from 'react';
import './playerCard.css';

interface PlayerCardProps {
  playerName: string;
  playerImage: string;
  registeredAt: string;
  timePlayedSeconds: number;
  rank: string;
  rankedPosition: number;
}

export function PlayerCard({
  playerName,
  playerImage,
  registeredAt,
  timePlayedSeconds,
  rank,
  rankedPosition,
}: PlayerCardProps) {

  const formatTimePlayed = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const formattedTime = `${hours}h ${minutes}m`;
    return formattedTime;
  };

  return (
    <div className="player-card">
      <div className="player-card__player-info">
        <div className="player-card__info-wrapper">
          <h3 className="player-card__player-info--emphasis">Name</h3>
          <p>{playerName}</p>
        </div>
        <div className="player-card__profile-image">
          <img src={playerImage} alt="Profile" className="image" />
        </div>
      </div>
      <div className="player-card__game-stats">
        <h3 className="player-card__player-info--emphasis">Game statistics</h3>
        <div>
          <div className="player-card__stat-entry">
            <p>Registered at:</p>
            <p>{registeredAt}</p>
          </div>
          <div className="player-card__stat-entry">
            <p>Time played:</p>
            <p>{formatTimePlayed(timePlayedSeconds)}</p>
          </div>
          <div className="player-card__stat-entry">
            <p>Rank:</p>
            <p>{rank}</p>
          </div>
          <div className="player-card__stat-entry">
            <p>Ranked position:</p>
            <p>{rankedPosition}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;
