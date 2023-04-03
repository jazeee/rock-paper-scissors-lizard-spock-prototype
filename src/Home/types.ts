export enum TournamentState {
  NEW_REGISTRATIONS_ARE_ALLOWED = 'New Registrations are Allowed',
  TOURNAMENT_HAS_STARTED = 'Tournament has Started',
  TOURNAMENT_HAS_COMPLETED = 'Tournament has Completed',
}

export interface ITournament {
  id: number; // unique primary key
  createdAt: string;
  state: TournamentState;
}

export interface IMatch {
  id: number; // unique primary key
  tierName: string;
  tournamentId: number;
  createdAt: string;
}

export interface IRegistrant {
  id: number; // unique primary key
  tournamentId: number;
  userName: string; // Uniqueness constraint in the db.
  createdAt: string;
}

export interface ICompetition {
  id: number; // unique primary key
  person1: IRegistrant;
  person2: IRegistrant; // Must not be same as person1
  createdAt: string;
  winner: IRegistrant | null;
  matchId: IMatch;
}
