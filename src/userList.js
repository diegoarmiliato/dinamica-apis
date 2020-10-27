module.exports = 
[
  {
    'sAMAccountName': 'Guest',
    'cn': 'Guest',
    'groups': [
      {
        'dn': 'CN=Guests,CN=Builtin,DC=dinamica,DC=net',
        'cn': 'Guests',
        'description': 'Guests have the same access as members of the Users group by default, except for the Guest account which is further restricted',
        'groupType': '-2147483643'
      }
    ]
  },
  {
    'sAMAccountName': 'krbtgt',
    'cn': 'krbtgt',
    'groups': [
      {
        'dn': 'CN=Denied RODC Password Replication Group,CN=Users,DC=dinamica,DC=net',
        'cn': 'Denied RODC Password Replication Group',
        'description': 'Members in this group cannot have their passwords replicated to any read-only domain controllers in the domain',
        'groupType': '-2147483644'
      }
    ]
  },
  {
    'sAMAccountName': 'Administrator',
    'cn': 'Administrator',
    'groups': [
      {
        'dn': 'CN=Administrators,CN=Builtin,DC=dinamica,DC=net',
        'cn': 'Administrators',
        'description': 'Administrators have complete and unrestricted access to the computer/domain',
        'groupType': '-2147483643'
      },
      {
        'dn': 'CN=Denied RODC Password Replication Group,CN=Users,DC=dinamica,DC=net',
        'cn': 'Denied RODC Password Replication Group',
        'description': 'Members in this group cannot have their passwords replicated to any read-only domain controllers in the domain',
        'groupType': '-2147483644'
      },
      {
        'dn': 'CN=Domain Admins,CN=Users,DC=dinamica,DC=net',
        'cn': 'Domain Admins',
        'description': 'Designated administrators of the domain',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Domain Controllers,CN=Users,DC=dinamica,DC=net',
        'cn': 'Domain Controllers',
        'description': 'All domain controllers in the domain',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Enterprise Admins,CN=Users,DC=dinamica,DC=net',
        'cn': 'Enterprise Admins',
        'description': 'Designated administrators of the enterprise',
        'groupType': '-2147483640'
      },
      {
        'dn': 'CN=Group Policy Creator Owners,CN=Users,DC=dinamica,DC=net',
        'cn': 'Group Policy Creator Owners',
        'description': 'Members in this group can modify group policy for the domain',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Schema Admins,CN=Users,DC=dinamica,DC=net',
        'cn': 'Schema Admins',
        'description': 'Designated administrators of the schema',
        'groupType': '-2147483640'
      }
    ]
  },
  {
    'sAMAccountName': 'admin',
    'givenName': 'Admin',
    'cn': 'Admin',
    'displayName': 'Admin',
    'groups': [
      {
        'dn': 'CN=Administrators,CN=Builtin,DC=dinamica,DC=net',
        'cn': 'Administrators',
        'description': 'Administrators have complete and unrestricted access to the computer/domain',
        'groupType': '-2147483643'
      },
      {
        'dn': 'CN=Denied RODC Password Replication Group,CN=Users,DC=dinamica,DC=net',
        'cn': 'Denied RODC Password Replication Group',
        'description': 'Members in this group cannot have their passwords replicated to any read-only domain controllers in the domain',
        'groupType': '-2147483644'
      },
      {
        'dn': 'CN=Domain Admins,CN=Users,DC=dinamica,DC=net',
        'cn': 'Domain Admins',
        'description': 'Designated administrators of the domain',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Enterprise Admins,CN=Users,DC=dinamica,DC=net',
        'cn': 'Enterprise Admins',
        'description': 'Designated administrators of the enterprise',
        'groupType': '-2147483640'
      },
      {
        'dn': 'CN=Group Policy Creator Owners,CN=Users,DC=dinamica,DC=net',
        'cn': 'Group Policy Creator Owners',
        'description': 'Members in this group can modify group policy for the domain',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Professores,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Professores',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Schema Admins,CN=Users,DC=dinamica,DC=net',
        'cn': 'Schema Admins',
        'description': 'Designated administrators of the schema',
        'groupType': '-2147483640'
      },
      {
        'dn': 'CN=Winflector users,CN=Users,DC=dinamica,DC=net',
        'cn': 'Winflector users',
        'description': 'Group for user accounts used with Winflector terminal server',
        'groupType': '-2147483644'
      }
    ]
  },
  {
    'sAMAccountName': 'Administrador',
    'cn': 'Administrador',
    'groups': [
      {
        'dn': 'CN=Administrators,CN=Builtin,DC=dinamica,DC=net',
        'cn': 'Administrators',
        'description': 'Administrators have complete and unrestricted access to the computer/domain',
        'groupType': '-2147483643'
      },
      {
        'dn': 'CN=Denied RODC Password Replication Group,CN=Users,DC=dinamica,DC=net',
        'cn': 'Denied RODC Password Replication Group',
        'description': 'Members in this group cannot have their passwords replicated to any read-only domain controllers in the domain',
        'groupType': '-2147483644'
      },
      {
        'dn': 'CN=Domain Admins,CN=Users,DC=dinamica,DC=net',
        'cn': 'Domain Admins',
        'description': 'Designated administrators of the domain',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Enterprise Admins,CN=Users,DC=dinamica,DC=net',
        'cn': 'Enterprise Admins',
        'description': 'Designated administrators of the enterprise',
        'groupType': '-2147483640'
      },
      {
        'dn': 'CN=Group Policy Creator Owners,CN=Users,DC=dinamica,DC=net',
        'cn': 'Group Policy Creator Owners',
        'description': 'Members in this group can modify group policy for the domain',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Schema Admins,CN=Users,DC=dinamica,DC=net',
        'cn': 'Schema Admins',
        'description': 'Designated administrators of the schema',
        'groupType': '-2147483640'
      }
    ]
  },
  {
    'sAMAccountName': 'brferrari',
    'givenName': 'Bruno',
    'sn': 'Ferrari',
    'cn': 'Bruno Ferrari',
    'displayName': 'Bruno Ferrari',
    'groups': [
      {
        'dn': 'CN=Impressao,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Impressao',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Print Operators,CN=Builtin,DC=dinamica,DC=net',
        'cn': 'Print Operators',
        'description': 'Members can administer printers installed on domain controllers',
        'groupType': '-2147483643'
      },
      {
        'dn': 'CN=Professores,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Professores',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Vnc,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Vnc',
        'groupType': '-2147483646'
      }
    ]
  },
  {
    'sAMAccountName': 'elferreira',
    'givenName': 'Elizangela',
    'sn': 'Ferreira',
    'cn': 'Elizangela Ferreira',
    'displayName': 'Elizangela Ferreira',
    'groups': [
      {
        'dn': 'CN=Dksoft,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Dksoft',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Drive,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Drive',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Impressao,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Impressao',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Print Operators,CN=Builtin,DC=dinamica,DC=net',
        'cn': 'Print Operators',
        'description': 'Members can administer printers installed on domain controllers',
        'groupType': '-2147483643'
      },
      {
        'dn': 'CN=Professores,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Professores',
        'groupType': '-2147483646'
      }
    ]
  },
  {
    'sAMAccountName': 'diego',
    'givenName': 'Diego',
    'sn': 'Armiliato',
    'cn': 'Diego Armiliato',
    'displayName': 'Diego Camargo Armiliato',
    'groups': [
      {
        'dn': 'CN=Dksoft,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Dksoft',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Drive,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Drive',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Impressao,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Impressao',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Print Operators,CN=Builtin,DC=dinamica,DC=net',
        'cn': 'Print Operators',
        'description': 'Members can administer printers installed on domain controllers',
        'groupType': '-2147483643'
      },
      {
        'dn': 'CN=Professores,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Professores',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Vnc,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Vnc',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Vpn,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Vpn',
        'groupType': '-2147483646'
      }
    ]
  },
  {
    'sAMAccountName': 'liferrari',
    'givenName': 'Lisiane',
    'sn': 'Ferrari',
    'cn': 'Lisiane Ferrari',
    'displayName': 'Lisiane Ferrari',
    'groups': [
      {
        'dn': 'CN=Dksoft,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Dksoft',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Drive,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Drive',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Impressao,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Impressao',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Print Operators,CN=Builtin,DC=dinamica,DC=net',
        'cn': 'Print Operators',
        'description': 'Members can administer printers installed on domain controllers',
        'groupType': '-2147483643'
      },
      {
        'dn': 'CN=Professores,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Professores',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Vnc,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Vnc',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Vpn,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Vpn',
        'groupType': '-2147483646'
      }
    ]
  },
  {
    'sAMAccountName': 'rawatanabe',
    'givenName': 'Rafael',
    'sn': 'Watanabe',
    'cn': 'Rafael Watanabe',
    'displayName': 'Rafael Watanabe',
    'groups': [
      {
        'dn': 'CN=Print Operators,CN=Builtin,DC=dinamica,DC=net',
        'cn': 'Print Operators',
        'description': 'Members can administer printers installed on domain controllers',
        'groupType': '-2147483643'
      },
      {
        'dn': 'CN=Professores,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Professores',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Vnc,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Vnc',
        'groupType': '-2147483646'
      }
    ]
  },
  {
    'sAMAccountName': 'masilva',
    'givenName': 'Maria Terezinha',
    'sn': 'Ramos Silva',
    'cn': 'Maria Terezinha Ramos Silva',
    'displayName': 'Maria Terezinha Ramos Silva',
    'groups': [
      {
        'dn': 'CN=Dksoft,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Dksoft',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Drive,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Drive',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Impressao,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Impressao',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Print Operators,CN=Builtin,DC=dinamica,DC=net',
        'cn': 'Print Operators',
        'description': 'Members can administer printers installed on domain controllers',
        'groupType': '-2147483643'
      },
      {
        'dn': 'CN=Professores,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Professores',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Vpn,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Vpn',
        'groupType': '-2147483646'
      }
    ]
  },
  {
    'sAMAccountName': 'kacaroliny',
    'givenName': 'Karinny',
    'sn': 'Caroliny',
    'cn': 'Karinny Caroliny',
    'displayName': 'Karinny Caroliny',
    'groups': [
      {
        'dn': 'CN=Comercial,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Comercial',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Dksoft,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Dksoft',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Impressao,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Impressao',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Print Operators,CN=Builtin,DC=dinamica,DC=net',
        'cn': 'Print Operators',
        'description': 'Members can administer printers installed on domain controllers',
        'groupType': '-2147483643'
      },
      {
        'dn': 'CN=Professores,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Professores',
        'groupType': '-2147483646'
      }
    ]
  },
  {
    'sAMAccountName': 'nayara',
    'givenName': 'Nayara',
    'sn': 'Armiliato',
    'cn': 'Nayara Armiliato',
    'displayName': 'Nayara Armiliato',
    'groups': [
      {
        'dn': 'CN=Dksoft,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Dksoft',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Drive,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Drive',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Impressao,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Impressao',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Print Operators,CN=Builtin,DC=dinamica,DC=net',
        'cn': 'Print Operators',
        'description': 'Members can administer printers installed on domain controllers',
        'groupType': '-2147483643'
      },
      {
        'dn': 'CN=Professores,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Professores',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Vnc,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Vnc',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Vpn,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Vpn',
        'groupType': '-2147483646'
      }
    ]
  },
  {
    'sAMAccountName': 'juliana',
    'givenName': 'Juliana',
    'sn': 'Coutinho',
    'cn': 'Juliana Coutinho',
    'displayName': 'Juliana Coutinho',
    'groups': [
      {
        'dn': 'CN=Professores,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Professores',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Vnc,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Vnc',
        'groupType': '-2147483646'
      }
    ]
  },
  {
    'sAMAccountName': 'crlorenti',
    'givenName': 'Cristiane',
    'sn': 'lorenti',
    'cn': 'Cristiane lorenti',
    'displayName': 'Cristiane lorenti',
    'groups': []
  },
  {
    'sAMAccountName': 'instalar',
    'givenName': 'Instalar',
    'sn': 'Aplicativo',
    'cn': 'Instalar Aplicativo',
    'displayName': 'Instalar Aplicativo',
    'groups': [
      {
        'dn': 'CN=Administrators,CN=Builtin,DC=dinamica,DC=net',
        'cn': 'Administrators',
        'description': 'Administrators have complete and unrestricted access to the computer/domain',
        'groupType': '-2147483643'
      },
      {
        'dn': 'CN=Local Admin,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Local Admin',
        'groupType': '-2147483646'
      }
    ]
  },
  {
    'sAMAccountName': 'adpereira',
    'givenName': 'Adryan',
    'sn': 'de Souza Pereira',
    'cn': 'Adryan de Souza Pereira',
    'displayName': 'Adryan de Souza Pereira',
    'groups': []
  },
  {
    'sAMAccountName': '203',
    'givenName': 'Agatha',
    'sn': 'Almeida',
    'cn': 'Agatha Almeida',
    'displayName': 'Agatha Almeida',
    'groups': []
  },
  {
    'sAMAccountName': 'agsantos',
    'givenName': 'Agatha',
    'sn': 'Marrassato Santos',
    'cn': 'Agatha Marrassato Santos',
    'displayName': 'Agatha Marrassato Santos',
    'groups': []
  },
  {
    'sAMAccountName': '190',
    'givenName': 'Agma',
    'sn': 'Dantas',
    'cn': 'Agma Dantas',
    'displayName': 'Agma Dantas',
    'groups': []
  },
  {
    'sAMAccountName': 'alroberto',
    'givenName': 'Alberto',
    'sn': 'Roberto',
    'cn': 'Alberto Roberto',
    'displayName': 'Alberto Roberto',
    'groups': []
  },
  {
    'sAMAccountName': 'alasilva',
    'givenName': 'Aldemir',
    'sn': 'Silva',
    'cn': 'Aldemir Silva',
    'displayName': 'Aldemir Silva',
    'groups': []
  },
  {
    'sAMAccountName': 'alsilva',
    'givenName': 'Alisson',
    'sn': 'Cavalcante Silva',
    'cn': 'Alisson Cavalcante Silva',
    'displayName': 'Alisson Cavalcante Silva',
    'groups': []
  },
  {
    'sAMAccountName': 'alsantos',
    'givenName': 'Alyson',
    'sn': 'Santos',
    'cn': 'Alyson Santos',
    'displayName': 'Alyson Santos',
    'groups': []
  },
  {
    'sAMAccountName': '167',
    'givenName': 'Ana',
    'sn': 'Dionisio',
    'cn': 'Ana Dionisio',
    'displayName': 'Ana Dionisio',
    'groups': []
  },
  {
    'sAMAccountName': 'angilna',
    'givenName': 'Ana',
    'sn': 'Gilna',
    'cn': 'Ana Gilna',
    'displayName': 'Ana Gilna',
    'groups': []
  },
  {
    'sAMAccountName': 'anlourenco',
    'givenName': 'Anderson',
    'sn': 'Carlos Lourenço',
    'cn': 'Anderson Carlos Lourenço',
    'displayName': 'Anderson Carlos Lourenço',
    'groups': []
  },
  {
    'sAMAccountName': 'ansantos',
    'givenName': 'Antônio',
    'sn': 'Santos',
    'cn': 'Antônio Santos',
    'displayName': 'Antônio Santos',
    'groups': []
  },
  {
    'sAMAccountName': '204',
    'givenName': 'Aracely',
    'sn': 'Rivero',
    'cn': 'Aracely Rivero',
    'displayName': 'Aracely Rivero',
    'groups': []
  },
  {
    'sAMAccountName': 'besousa',
    'givenName': 'Beatriz',
    'sn': 'de Andrade Sousa',
    'cn': 'Beatriz de Andrade Sousa',
    'displayName': 'Beatriz de Andrade Sousa',
    'groups': []
  },
  {
    'sAMAccountName': 'bisouza',
    'givenName': 'Bianca',
    'sn': 'Santos de Souza',
    'cn': 'Bianca Santos de Souza',
    'displayName': 'Bianca Santos de Souza',
    'groups': []
  },
  {
    'sAMAccountName': '168',
    'givenName': 'Bruna',
    'sn': 'Marchi',
    'cn': 'Bruna Marchi',
    'displayName': 'Bruna Marchi',
    'groups': []
  },
  {
    'sAMAccountName': 'brmelo',
    'givenName': 'Bruna',
    'sn': 'Melo',
    'cn': 'Bruna Melo',
    'displayName': 'Bruna Melo',
    'groups': []
  },
  {
    'sAMAccountName': '185',
    'givenName': 'Camili',
    'sn': 'Oliveira',
    'cn': 'Camili Oliveira',
    'displayName': 'Camili Oliveira',
    'groups': []
  },
  {
    'sAMAccountName': 'camedeiros',
    'givenName': 'Camily',
    'sn': 'Vitória Vieira Medeiros',
    'cn': 'Camily Vitória Vieira Medeiros',
    'displayName': 'Camily Vitória Vieira Medeiros',
    'groups': []
  },
  {
    'sAMAccountName': 'caresende',
    'givenName': 'Caroline',
    'sn': 'Resende',
    'cn': 'Caroline Resende',
    'displayName': 'Caroline Resende',
    'groups': []
  },
  {
    'sAMAccountName': 'cateodoro',
    'givenName': 'Cauã',
    'sn': 'Teodoro',
    'cn': 'Cauã Teodoro',
    'displayName': 'Cauã Teodoro',
    'groups': []
  },
  {
    'sAMAccountName': 'cemarques',
    'givenName': 'Célia',
    'sn': 'Marques',
    'cn': 'Célia Marques',
    'displayName': 'Célia Marques',
    'groups': []
  },
  {
    'sAMAccountName': 'cllima',
    'givenName': 'cleudieni',
    'sn': 'Lima',
    'cn': 'cleudieni Lima',
    'displayName': 'cleudieni Lima',
    'groups': []
  },
  {
    'sAMAccountName': 'crqueiroz',
    'givenName': 'Cristhian',
    'sn': 'Queiroz',
    'cn': 'Cristhian Queiroz',
    'displayName': 'Cristhian Queiroz',
    'groups': []
  },
  {
    'sAMAccountName': 'crcustodio',
    'givenName': 'Cristiano',
    'sn': 'Custódio',
    'cn': 'Cristiano Custódio',
    'displayName': 'Cristiano Custódio',
    'groups': []
  },
  {
    'sAMAccountName': 'cypaixao',
    'givenName': 'Cynthia',
    'sn': 'Paixão',
    'cn': 'Cynthia Paixão',
    'displayName': 'Cynthia Paixão',
    'groups': []
  },
  {
    'sAMAccountName': 'dasousa',
    'givenName': 'Dagila',
    'sn': 'Rayane Carvalho de Sousa',
    'cn': 'Dagila Rayane Carvalho de Sousa',
    'displayName': 'Dagila Rayane Carvalho de Sousa',
    'groups': []
  },
  {
    'sAMAccountName': 'dasouza',
    'givenName': 'Dagila',
    'sn': 'Rayane Carvalho de Souza',
    'cn': 'Dagila Rayane Carvalho de Souza',
    'displayName': 'Dagila Rayane Carvalho de Souza',
    'groups': []
  },
  {
    'sAMAccountName': 'damorais',
    'givenName': 'Daniel',
    'sn': 'Morais',
    'cn': 'Daniel Morais',
    'displayName': 'Daniel Morais',
    'groups': []
  },
  {
    'sAMAccountName': 'dinamica',
    'givenName': 'Dinamica',
    'sn': 'Cursos',
    'cn': 'Dinamica Cursos',
    'displayName': 'Dinamica Cursos',
    'groups': []
  },
  {
    'sAMAccountName': 'diflores',
    'givenName': 'Diogo',
    'sn': 'Flores',
    'cn': 'Diogo Flores',
    'displayName': 'Diogo Flores',
    'groups': []
  },
  {
    'sAMAccountName': 'edalulas',
    'givenName': 'Edenilson',
    'sn': 'Aparecido de Alulas',
    'cn': 'Edenilson Aparecido de Alulas',
    'displayName': 'Edenilson Aparecido de Alulas',
    'groups': []
  },
  {
    'sAMAccountName': 'elsferreira',
    'givenName': 'Eliana',
    'sn': 'Ferreira',
    'cn': 'Eliana Ferreira',
    'displayName': 'Eliana Ferreira',
    'groups': []
  },
  {
    'sAMAccountName': 'elalcantara',
    'givenName': 'Eliene',
    'sn': 'Alcantara',
    'cn': 'Eliene Alcantara',
    'displayName': 'Eliene Alcantara',
    'groups': []
  },
  {
    'sAMAccountName': 'elanjos',
    'givenName': 'Eliza',
    'sn': 'Anjos',
    'cn': 'Eliza Anjos',
    'displayName': 'Eliza Anjos',
    'groups': []
  },
  {
    'sAMAccountName': 'evgomes',
    'givenName': 'Evelyn',
    'sn': 'Gomes',
    'cn': 'Evelyn Gomes',
    'displayName': 'Evelyn Gomes',
    'groups': []
  },
  {
    'sAMAccountName': 'evsilva',
    'givenName': 'Evlin',
    'sn': 'Alves da Silva',
    'cn': 'Evlin Alves da Silva',
    'displayName': 'Evlin Alves da Silva',
    'groups': []
  },
  {
    'sAMAccountName': '199',
    'givenName': 'Fabiana',
    'sn': 'Gomes',
    'cn': 'Fabiana Gomes',
    'displayName': 'Fabiana Gomes',
    'groups': []
  },
  {
    'sAMAccountName': 'falima',
    'givenName': 'Fabio',
    'sn': 'da Silva Lima',
    'cn': 'Fabio da Silva Lima',
    'displayName': 'Fabio da Silva Lima',
    'groups': []
  },
  {
    'sAMAccountName': 'facondini',
    'givenName': 'Fabrícia',
    'sn': 'Condini',
    'cn': 'Fabrícia Condini',
    'displayName': 'Fabrícia Condini',
    'groups': []
  },
  {
    'sAMAccountName': 'febaptista',
    'givenName': 'Felipe',
    'sn': 'Baptista',
    'cn': 'Felipe Baptista',
    'displayName': 'Felipe Baptista',
    'groups': []
  },
  {
    'sAMAccountName': '60',
    'givenName': 'Felipe',
    'sn': 'Gabriel Muniz de Souza',
    'cn': 'Felipe Gabriel Muniz de Souza',
    'displayName': 'Felipe Gabriel Muniz de Souza',
    'groups': []
  },
  {
    'sAMAccountName': 'fetorres',
    'givenName': 'Felipe',
    'sn': 'Torres',
    'cn': 'Felipe Torres',
    'displayName': 'Felipe Torres',
    'groups': []
  },
  {
    'sAMAccountName': 'frjunior',
    'givenName': 'Francisco',
    'sn': 'Junior',
    'cn': 'Francisco Junior',
    'displayName': 'Francisco Junior',
    'groups': []
  },
  {
    'sAMAccountName': '144',
    'givenName': 'Francisco Gabriel',
    'sn': 'Pereira Santos',
    'cn': 'Francisco Pereira',
    'displayName': 'Francisco Pereira',
    'groups': []
  },
  {
    'sAMAccountName': 'gaandersen',
    'givenName': 'Gabriel',
    'sn': 'Andersen',
    'cn': 'Gabriel Andersen',
    'displayName': 'Gabriel Andersen',
    'groups': []
  },
  {
    'sAMAccountName': '61',
    'givenName': 'Gabriel',
    'sn': 'Eduardo Muniz de Souza',
    'cn': 'Gabriel Eduardo Muniz de Souza',
    'displayName': 'Gabriel Eduardo Muniz de Souza',
    'groups': []
  },
  {
    'sAMAccountName': 'gamuricy',
    'givenName': 'Gabrielli',
    'sn': 'Muricy',
    'cn': 'Gabrielli Muricy',
    'displayName': 'Gabrielli Muricy',
    'groups': []
  },
  {
    'sAMAccountName': 'gabatista',
    'givenName': 'Gabrielly',
    'sn': 'Batista',
    'cn': 'Gabrielly Batista',
    'displayName': 'Gabrielly Batista',
    'groups': []
  },
  {
    'sAMAccountName': '175',
    'givenName': 'Gilmar',
    'sn': 'Silva',
    'cn': 'Gilmar Silva',
    'displayName': 'Gilmar Silva',
    'groups': []
  },
  {
    'sAMAccountName': '200',
    'givenName': 'Giovane',
    'sn': 'Pedroso',
    'cn': 'Giovane Pedroso',
    'displayName': 'Giovane Pedroso',
    'groups': []
  },
  {
    'sAMAccountName': 'gisorelli',
    'givenName': 'Giovane',
    'sn': 'Sorelli',
    'cn': 'Giovane Sorelli',
    'displayName': 'Giovane Sorelli',
    'groups': []
  },
  {
    'sAMAccountName': '206',
    'givenName': 'Giovanna',
    'sn': 'Sperandio',
    'cn': 'Giovanna Sperandio',
    'displayName': 'Giovanna Sperandio',
    'groups': []
  },
  {
    'sAMAccountName': 'giandrade',
    'givenName': 'Giovanni',
    'sn': 'Pereira de Andrade',
    'cn': 'Giovanni Pereira de Andrade',
    'displayName': 'Giovanni Pereira de Andrade',
    'groups': []
  },
  {
    'sAMAccountName': 'gioliveira',
    'givenName': 'Gizele',
    'sn': 'Oliveira',
    'cn': 'Gizele Oliveira',
    'displayName': 'Gizele Oliveira',
    'groups': []
  },
  {
    'sAMAccountName': 'grsampaio',
    'givenName': 'Grasiele',
    'sn': 'Oliveira Sampaio',
    'cn': 'Grasiele Oliveira Sampaio',
    'displayName': 'Grasiele Oliveira Sampaio',
    'groups': []
  },
  {
    'sAMAccountName': 'gupress',
    'givenName': 'Guilherme',
    'sn': 'da Costa Press',
    'cn': 'Guilherme da Costa Press',
    'displayName': 'Guilherme da Costa Press',
    'groups': []
  },
  {
    'sAMAccountName': '169',
    'givenName': 'Guilherme',
    'sn': 'Rodrigues',
    'cn': 'Guilherme Rodrigues',
    'displayName': 'Guilherme Rodrigues',
    'groups': []
  },
  {
    'sAMAccountName': 'guandersen',
    'givenName': 'Gustavo',
    'sn': 'Andersen',
    'cn': 'Gustavo Andersen',
    'displayName': 'Gustavo Andersen',
    'groups': []
  },
  {
    'sAMAccountName': 'hegoncalves',
    'givenName': 'Heitor',
    'sn': 'Gonçalves',
    'cn': 'Heitor Gonçalves',
    'displayName': 'Heitor Gonçalves',
    'groups': []
  },
  {
    'sAMAccountName': 'hecruz',
    'givenName': 'Heloyse',
    'sn': 'Corado Cruz',
    'cn': 'Heloyse Corado Cruz',
    'displayName': 'Heloyse Corado Cruz',
    'groups': []
  },
  {
    'sAMAccountName': 'heluz',
    'givenName': 'Heloyse',
    'sn': 'Corado Luz',
    'cn': 'Heloyse Corado Luz',
    'displayName': 'Heloyse Corado Luz',
    'groups': []
  },
  {
    'sAMAccountName': '179',
    'givenName': 'Iggor',
    'sn': 'Silva',
    'cn': 'Iggor Silva',
    'displayName': 'Iggor Silva',
    'groups': []
  },
  {
    'sAMAccountName': 'insilva',
    'givenName': 'Ingrid',
    'sn': 'Silva',
    'cn': 'Ingrid Silva',
    'displayName': 'Ingrid Silva',
    'groups': []
  },
  {
    'sAMAccountName': 'isferreira',
    'givenName': 'Isabela',
    'sn': 'Ferreira',
    'cn': 'Isabela Ferreira',
    'displayName': 'Isabela Ferreira',
    'groups': []
  },
  {
    'sAMAccountName': 'isjesus',
    'givenName': 'Isabela',
    'sn': 'Jesus',
    'cn': 'Isabela Jesus',
    'displayName': 'Isabela Jesus',
    'groups': []
  },
  {
    'sAMAccountName': 'ispessoa',
    'givenName': 'Isabela',
    'sn': 'Oliveira Pessoa',
    'cn': 'Isabela Oliveira Pessoa',
    'displayName': 'Isabela Oliveira Pessoa',
    'groups': []
  },
  {
    'sAMAccountName': '177',
    'givenName': 'Isabella',
    'sn': 'Oliveira',
    'cn': 'Isabella Oliveira',
    'displayName': 'Isabella Oliveira',
    'groups': []
  },
  {
    'sAMAccountName': 'jasantos',
    'givenName': 'Javer',
    'sn': 'Ferreira dos Santos',
    'cn': 'Javer Ferreira dos Santos',
    'displayName': 'Javer Ferreira dos Santos',
    'groups': []
  },
  {
    'sAMAccountName': '201',
    'givenName': 'Jeferson',
    'sn': 'Marchi',
    'cn': 'Jeferson Marchi',
    'displayName': 'Jeferson Marchi',
    'groups': []
  },
  {
    'sAMAccountName': 'jhsouza',
    'givenName': 'Jhennifer',
    'sn': 'Souza',
    'cn': 'Jhennifer Souza',
    'displayName': 'Jhennifer Souza',
    'groups': []
  },
  {
    'sAMAccountName': 'josilva',
    'givenName': 'João Vitor',
    'sn': 'Silva',
    'cn': 'João Vitor Silva',
    'displayName': 'João Vitor Silva',
    'groups': []
  },
  {
    'sAMAccountName': 'jomuricy',
    'givenName': 'Joesel',
    'sn': 'Muricy',
    'cn': 'Joesel Muricy',
    'displayName': 'Joesel Muricy',
    'groups': []
  },
  {
    'sAMAccountName': 'jonsantos',
    'givenName': 'Jonathan',
    'sn': 'Santos',
    'cn': 'Jonathan Santos',
    'displayName': 'Jonathan Santos',
    'groups': []
  },
  {
    'sAMAccountName': '164',
    'givenName': 'Josefa',
    'sn': 'Oliveira',
    'cn': 'Josefa Oliveira',
    'displayName': 'Josefa Oliveira',
    'groups': []
  },
  {
    'sAMAccountName': 'juoliveira',
    'givenName': 'Júlia',
    'sn': 'Oliveira',
    'cn': 'Júlia Oliveira',
    'displayName': 'Júlia Oliveira',
    'groups': []
  },
  {
    'sAMAccountName': '202',
    'givenName': 'Julio',
    'sn': 'Silva',
    'cn': 'Julio Silva',
    'displayName': 'Julio Silva',
    'groups': []
  },
  {
    'sAMAccountName': 'kamedeiros',
    'givenName': 'Kaiky',
    'sn': 'Vieira Medeiros',
    'cn': 'Kaiky Vieira Medeiros',
    'displayName': 'Kaiky Vieira Medeiros',
    'groups': []
  },
  {
    'sAMAccountName': '135',
    'givenName': 'Kauã Nogueira',
    'sn': 'Santos',
    'cn': 'Kauã Santos',
    'displayName': 'Kauã Santos',
    'groups': []
  },
  {
    'sAMAccountName': '193',
    'givenName': 'kauã Vinicius',
    'sn': 'silva',
    'cn': 'kauã silva',
    'displayName': 'kauã silva',
    'groups': []
  },
  {
    'sAMAccountName': 'kedias',
    'givenName': 'Keenan',
    'sn': 'Dias',
    'cn': 'Keenan Dias',
    'displayName': 'Keenan Dias',
    'groups': []
  },
  {
    'sAMAccountName': 'lagabriella',
    'givenName': 'Lavinia',
    'sn': 'Gabriella',
    'cn': 'Lavinia Gabriella',
    'displayName': 'Lavinia Gabriella',
    'groups': []
  },
  {
    'sAMAccountName': 'lesantos',
    'givenName': 'Leandro',
    'sn': 'Santos',
    'cn': 'Leandro Santos',
    'displayName': 'Leandro Santos',
    'groups': []
  },
  {
    'sAMAccountName': 'lesegala',
    'givenName': 'Leandro',
    'sn': 'Segala',
    'cn': 'Leandro Segala',
    'displayName': 'Leandro Segala',
    'groups': []
  },
  {
    'sAMAccountName': 'lecirineu',
    'givenName': 'Leonardo',
    'sn': 'Cirineu',
    'cn': 'Leonardo Cirineu',
    'displayName': 'Leonardo Cirineu',
    'groups': []
  },
  {
    'sAMAccountName': 'ledias',
    'givenName': 'Leonardo',
    'sn': 'Dias',
    'cn': 'Leonardo Dias',
    'displayName': 'Leonardo Dias',
    'groups': []
  },
  {
    'sAMAccountName': 'lesantana',
    'givenName': 'Leonardo',
    'sn': 'Santana',
    'cn': 'Leonardo Santana',
    'displayName': 'Leonardo Santana',
    'groups': []
  },
  {
    'sAMAccountName': 'lenascimento',
    'givenName': 'Leticia',
    'sn': 'Nascimento',
    'cn': 'Leticia Nascimento',
    'displayName': 'Leticia Nascimento',
    'groups': []
  },
  {
    'sAMAccountName': 'lisilva',
    'givenName': 'Lilian',
    'sn': 'Silva',
    'cn': 'Lilian Silva',
    'displayName': 'Lilian Silva',
    'groups': []
  },
  {
    'sAMAccountName': 'lorodrigues',
    'givenName': 'Lohayne',
    'sn': 'Rodrigues',
    'cn': 'Lohayne Rodrigues',
    'displayName': 'Lohayne Rodrigues',
    'groups': []
  },
  {
    'sAMAccountName': 'luvale',
    'givenName': 'Luan',
    'sn': 'Vale',
    'cn': 'Luan Vale',
    'displayName': 'Luan Vale',
    'groups': []
  },
  {
    'sAMAccountName': 'lurego',
    'givenName': 'Luana',
    'sn': 'Rego',
    'cn': 'Luana Rego',
    'displayName': 'Luana Rego',
    'groups': []
  },
  {
    'sAMAccountName': 'luboquino',
    'givenName': 'Lucas',
    'sn': 'Boquino',
    'cn': 'Lucas Boquino',
    'displayName': 'Lucas Boquino',
    'groups': []
  },
  {
    'sAMAccountName': 'luribeiro',
    'givenName': 'Lucas',
    'sn': 'Ribeiro',
    'cn': 'Lucas Ribeiro',
    'displayName': 'Lucas Ribeiro',
    'groups': []
  },
  {
    'sAMAccountName': 'lusilva',
    'givenName': 'Lucas',
    'sn': 'Silva Fernandes da Silva',
    'cn': 'Lucas Silva Fernandes da Silva',
    'displayName': 'Lucas Silva Fernandes da Silva',
    'groups': []
  },
  {
    'sAMAccountName': 'lugabino',
    'givenName': 'Luciano',
    'sn': 'Gabino',
    'cn': 'Luciano Gabino',
    'displayName': 'Luciano Gabino',
    'groups': []
  },
  {
    'sAMAccountName': 'mainacio',
    'givenName': 'Manoel',
    'sn': 'Inácio',
    'cn': 'Manoel Inácio',
    'displayName': 'Manoel Inácio',
    'groups': []
  },
  {
    'sAMAccountName': '145',
    'givenName': 'Maria',
    'sn': 'Brandão',
    'cn': 'Maria Brandão',
    'displayName': 'Maria Brandão',
    'groups': []
  },
  {
    'sAMAccountName': '127',
    'givenName': 'Maria',
    'sn': 'Clara',
    'cn': 'Maria Clara',
    'displayName': 'Maria Clara',
    'groups': []
  },
  {
    'sAMAccountName': 'macarozze',
    'givenName': 'Maria Cristina',
    'sn': 'Carozze',
    'cn': 'Maria Cristina Carozze',
    'displayName': 'Maria Cristina Carozze',
    'groups': []
  },
  {
    'sAMAccountName': 'mapereira',
    'givenName': 'Maria Eduarda',
    'sn': 'Ribeiro Pereira',
    'cn': 'Maria Eduarda Ribeiro Pereira',
    'displayName': 'Maria Eduarda Ribeiro Pereira',
    'groups': []
  },
  {
    'sAMAccountName': 'mavitor',
    'givenName': 'Maria Eloisa',
    'sn': 'Vitor',
    'cn': 'Maria Eloisa Vitor',
    'displayName': 'Maria Eloisa Vitor',
    'groups': []
  },
  {
    'sAMAccountName': '183',
    'givenName': 'Maria',
    'sn': 'Gobato',
    'cn': 'Maria Gobato',
    'displayName': 'Maria Gobato',
    'groups': []
  },
  {
    'sAMAccountName': 'masanches',
    'givenName': 'Maria Joice',
    'sn': 'Dias Sanches',
    'cn': 'Maria Joice Dias Sanches',
    'displayName': 'Maria Joice Dias Sanches',
    'groups': []
  },
  {
    'sAMAccountName': 'malima',
    'givenName': 'maria',
    'sn': 'lima',
    'cn': 'maria lima',
    'displayName': 'maria lima',
    'groups': []
  },
  {
    'sAMAccountName': '176',
    'givenName': 'Maria',
    'sn': 'Niero',
    'cn': 'Maria Niero',
    'displayName': 'Maria Niero',
    'groups': []
  },
  {
    'sAMAccountName': 'maesilva',
    'givenName': 'Maria',
    'sn': 'Silva',
    'cn': 'Maria Silva',
    'displayName': 'Maria Silva',
    'groups': []
  },
  {
    'sAMAccountName': '184',
    'givenName': 'Mariae',
    'sn': 'Silva',
    'cn': 'Mariae Silva',
    'displayName': 'Mariae Silva',
    'groups': []
  },
  {
    'sAMAccountName': 'maantonio',
    'givenName': 'Marlene',
    'sn': 'Antônio',
    'cn': 'Marlene Antônio',
    'displayName': 'Marlene Antônio',
    'groups': []
  },
  {
    'sAMAccountName': '181',
    'givenName': 'Mateus',
    'sn': 'Benivides',
    'cn': 'Mateus Benivides',
    'displayName': 'Mateus Benivides',
    'groups': []
  },
  {
    'sAMAccountName': '54',
    'givenName': 'Mateus',
    'sn': 'Silva',
    'cn': 'Mateus Silva',
    'displayName': 'Mateus Silva',
    'groups': []
  },
  {
    'sAMAccountName': 'mafsilva',
    'givenName': 'Matheus',
    'sn': 'Fernandes da Silva',
    'cn': 'Matheus Fernandes da Silva',
    'displayName': 'Matheus Fernandes da Silva',
    'groups': []
  },
  {
    'sAMAccountName': '188',
    'givenName': 'Maycon',
    'sn': 'Silva',
    'cn': 'Maycon Silva',
    'displayName': 'Maycon Silva',
    'groups': []
  },
  {
    'sAMAccountName': '170',
    'givenName': 'Michele',
    'sn': 'Oliveira',
    'cn': 'Michele Oliveira',
    'displayName': 'Michele Oliveira',
    'groups': []
  },
  {
    'sAMAccountName': 'milsilva',
    'givenName': 'Milene',
    'sn': 'Francine Silva',
    'cn': 'Milene Francine Silva',
    'displayName': 'Milene Francine Silva',
    'groups': []
  },
  {
    'sAMAccountName': 'misilva',
    'givenName': 'Milene',
    'sn': 'Silva',
    'cn': 'Milene Silva',
    'displayName': 'Milene Silva',
    'groups': []
  },
  {
    'sAMAccountName': 'naaparecida',
    'givenName': 'Natalia',
    'sn': 'Aparecida',
    'cn': 'Natalia Aparecida',
    'displayName': 'Natalia Aparecida',
    'groups': []
  },
  {
    'sAMAccountName': 'naballeste',
    'givenName': 'Natalia',
    'sn': 'Balleste',
    'cn': 'Natalia Balleste',
    'displayName': 'Natalia Balleste',
    'groups': []
  },
  {
    'sAMAccountName': 'naoliveira',
    'givenName': 'Nayara',
    'sn': 'Oliveira',
    'cn': 'Nayara Oliveira',
    'displayName': 'Nayara Oliveira',
    'groups': []
  },
  {
    'sAMAccountName': 'nisantana',
    'givenName': 'Nívea',
    'sn': 'Santana',
    'cn': 'Nívea Santana',
    'displayName': 'Nívea Santana',
    'groups': []
  },
  {
    'sAMAccountName': 'paassuncao',
    'givenName': 'Patrícia',
    'sn': 'Assunção',
    'cn': 'Patrícia Assunção',
    'displayName': 'Patrícia Assunção',
    'groups': []
  },
  {
    'sAMAccountName': 'prfernandes',
    'givenName': 'Priscila',
    'sn': 'Carla G Fernandes',
    'cn': 'Priscila Carla G Fernandes',
    'displayName': 'Priscila Carla G Fernandes',
    'groups': []
  },
  {
    'sAMAccountName': 'ramarchi',
    'givenName': 'Rafaela',
    'sn': 'de Marchi',
    'cn': 'Rafaela de Marchi',
    'displayName': 'Rafaela de Marchi',
    'groups': []
  },
  {
    'sAMAccountName': 'ragomes',
    'givenName': 'Raimundo',
    'sn': 'Gomes',
    'cn': 'Raimundo Gomes',
    'displayName': 'Raimundo Gomes',
    'groups': []
  },
  {
    'sAMAccountName': 'rajesus',
    'givenName': 'Raul',
    'sn': 'Jesus',
    'cn': 'Raul Jesus',
    'displayName': 'Raul Jesus',
    'groups': []
  },
  {
    'sAMAccountName': '178',
    'givenName': 'Rayssa',
    'sn': 'Nascimento',
    'cn': 'Rayssa Nascimento',
    'displayName': 'Rayssa Nascimento',
    'groups': []
  },
  {
    'sAMAccountName': 'recarvalho',
    'givenName': 'Rebeca',
    'sn': 'Carvalho',
    'cn': 'Rebeca Carvalho',
    'displayName': 'Rebeca Carvalho',
    'groups': []
  },
  {
    'sAMAccountName': 'rearaujo',
    'givenName': 'Reckiciene',
    'sn': 'Kohatsu de Araujo',
    'cn': 'Reckiciene Kohatsu de Araujo',
    'displayName': 'Reckiciene Kohatsu de Araujo',
    'groups': []
  },
  {
    'sAMAccountName': 'rebarboza',
    'givenName': 'Renam',
    'sn': 'Barboza',
    'cn': 'Renam Barboza',
    'displayName': 'Renam Barboza',
    'groups': []
  },
  {
    'sAMAccountName': '182',
    'givenName': 'Renata',
    'sn': 'Silva',
    'cn': 'Renata Silva',
    'displayName': 'Renata Silva',
    'groups': []
  },
  {
    'sAMAccountName': 'risantos',
    'givenName': 'Ricardo',
    'sn': 'dos Santos',
    'cn': 'Ricardo dos Santos',
    'displayName': 'Ricardo dos Santos',
    'groups': []
  },
  {
    'sAMAccountName': 'ropereira',
    'givenName': 'Roberto',
    'sn': 'Pereira',
    'cn': 'Roberto Pereira',
    'displayName': 'Roberto Pereira',
    'groups': []
  },
  {
    'sAMAccountName': 'ropress',
    'givenName': 'Rosana',
    'sn': 'Press',
    'cn': 'Rosana Press',
    'displayName': 'Rosana Press',
    'groups': []
  },
  {
    'sAMAccountName': 'rorocha',
    'givenName': 'Rosana',
    'sn': 'Rocha',
    'cn': 'Rosana Rocha',
    'displayName': 'Rosana Rocha',
    'groups': []
  },
  {
    'sAMAccountName': 'rocarvalho',
    'givenName': 'Rosana',
    'sn': 'Silva Brito Carvalho',
    'cn': 'Rosana Silva Brito Carvalho',
    'displayName': 'Rosana Silva Brito Carvalho',
    'groups': []
  },
  {
    'sAMAccountName': 'rolisboa',
    'givenName': 'Rosangela Arcanjo',
    'sn': 'Lisboa',
    'cn': 'Rosangela Arcanjo Lisboa',
    'displayName': 'Rosangela Arcanjo Lisboa',
    'groups': []
  },
  {
    'sAMAccountName': 'ronobre',
    'givenName': 'Roseane',
    'sn': 'Nobre',
    'cn': 'Roseane Nobre',
    'displayName': 'Roseane Nobre',
    'groups': []
  },
  {
    'sAMAccountName': 'roaraujo',
    'givenName': 'Roseli',
    'sn': 'Araujo',
    'cn': 'Roseli Araujo',
    'displayName': 'Roseli Araujo',
    'groups': []
  },
  {
    'sAMAccountName': '161',
    'givenName': 'Ryan',
    'sn': 'Lima',
    'cn': 'Ryan Lima',
    'displayName': 'Ryan Lima',
    'groups': []
  },
  {
    'sAMAccountName': 'sesilva',
    'givenName': 'Sebastião',
    'sn': 'Pedro da Silva',
    'cn': 'Sebastião Pedro da Silva',
    'displayName': 'Sebastião Pedro da Silva',
    'groups': []
  },
  {
    'sAMAccountName': 'shgiareta',
    'givenName': 'Shewry',
    'sn': 'Giareta',
    'cn': 'Shewry Giareta',
    'displayName': 'Shewry Giareta',
    'groups': []
  },
  {
    'sAMAccountName': '173',
    'givenName': 'Simone',
    'sn': 'Correa',
    'cn': 'Simone Correa',
    'displayName': 'Simone Correa',
    'groups': []
  },
  {
    'sAMAccountName': 'tanogueira',
    'givenName': 'Talia',
    'sn': 'da Silva Nogueira',
    'cn': 'Talia da Silva Nogueira',
    'displayName': 'Talia da Silva Nogueira',
    'groups': []
  },
  {
    'sAMAccountName': 'tafreitas',
    'givenName': 'Talita',
    'sn': 'Freitas',
    'cn': 'Talita Freitas',
    'displayName': 'Talita Freitas',
    'groups': []
  },
  {
    'sAMAccountName': '189',
    'givenName': 'Tatiane',
    'sn': 'Bocca',
    'cn': 'Tatiane Bocca',
    'displayName': 'Tatiane Bocca',
    'groups': []
  },
  {
    'sAMAccountName': 'ticamargo',
    'givenName': 'Tiago',
    'sn': 'Camargo',
    'cn': 'Tiago Camargo',
    'displayName': 'Tiago Camargo',
    'groups': []
  },
  {
    'sAMAccountName': 'vasilva',
    'givenName': 'Vanderlei',
    'sn': 'Silva',
    'cn': 'Vanderlei Silva',
    'displayName': 'Vanderlei Silva',
    'groups': []
  },
  {
    'sAMAccountName': 'varoque',
    'givenName': 'Vanessa',
    'sn': 'Roque',
    'cn': 'Vanessa Roque',
    'displayName': 'Vanessa Roque',
    'groups': []
  },
  {
    'sAMAccountName': 'vihugo',
    'givenName': 'Victor',
    'sn': 'Hugo',
    'cn': 'Victor Hugo',
    'displayName': 'Victor Hugo',
    'groups': []
  },
  {
    'sAMAccountName': 'vigoncalves',
    'givenName': 'Vitor',
    'sn': 'Gonçalves',
    'cn': 'Vitor Gonçalves',
    'displayName': 'Vitor Gonçalves',
    'groups': []
  },
  {
    'sAMAccountName': 'visousa',
    'givenName': 'Vitória',
    'sn': 'Heloisa de Andrade Sousa',
    'cn': 'Vitória Heloisa de Andrade Sousa',
    'displayName': 'Vitória Heloisa de Andrade Sousa',
    'groups': []
  },
  {
    'sAMAccountName': 'visilva',
    'givenName': 'Vitoria',
    'sn': 'Ribeiro da Silva',
    'cn': 'Vitoria Ribeiro da Silva',
    'displayName': 'Vitoria Ribeiro da Silva',
    'groups': []
  },
  {
    'sAMAccountName': 'yasilva',
    'givenName': 'Yasmin',
    'sn': 'Avelar Silva',
    'cn': 'Yasmin Avelar Silva',
    'displayName': 'Yasmin Avelar Silva',
    'groups': []
  },
  {
    'sAMAccountName': 'francine',
    'givenName': 'Francine',
    'sn': 'Almeida',
    'cn': 'Francine Almeida',
    'displayName': 'Francine Almeida',
    'groups': [
      {
        'dn': 'CN=Professores,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Professores',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Vnc,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Vnc',
        'groupType': '-2147483646'
      }
    ]
  },
  {
    'sAMAccountName': 'RDV GRAPHICS SERVICE',
    'cn': 'RDV GRAPHICS SERVICE',
    'displayName': 'RDV GRAPHICS SERVICE',
    'groups': []
  },
  {
    'sAMAccountName': 'magarcia',
    'givenName': 'Mariana',
    'sn': 'Garcia',
    'cn': 'Mariana Garcia',
    'displayName': 'Mariana Garcia',
    'groups': [
      {
        'dn': 'CN=Dksoft,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Dksoft',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Drive,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Drive',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Professores,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Professores',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Vnc,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Vnc',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Vpn,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Vpn',
        'groupType': '-2147483646'
      }
    ]
  },
  {
    'sAMAccountName': '207',
    'givenName': 'Ana Laura',
    'sn': 'Clemente',
    'cn': 'Ana Laura Clemente',
    'displayName': 'Ana Laura Clemente',
    'groups': []
  },
  {
    'sAMAccountName': '211',
    'givenName': 'EDUARDA',
    'sn': 'ALVES RIBEIRO',
    'cn': 'EDUARDA ALVES RIBEIRO',
    'displayName': 'EDUARDA ALVES RIBEIRO',
    'groups': []
  },
  {
    'sAMAccountName': '209',
    'givenName': 'JULIA',
    'sn': 'APARECIDA PRADO',
    'cn': 'JULIA APARECIDA PRADO',
    'displayName': 'JULIA APARECIDA PRADO',
    'groups': []
  },
  {
    'sAMAccountName': '212',
    'givenName': 'Karllin',
    'sn': 'Oliveira',
    'cn': 'Karllin Oliveira',
    'displayName': 'Karllin Oliveira',
    'groups': []
  },
  {
    'sAMAccountName': '213',
    'givenName': 'Mariana',
    'sn': 'Santos',
    'cn': 'Mariana Santos',
    'groups': []
  },
  {
    'sAMAccountName': '208',
    'givenName': 'Elaine',
    'sn': 'Cristina dos Santos',
    'cn': 'Elaine Cristina dos Santos',
    'displayName': 'Elaine Cristina dos Santos',
    'groups': []
  },
  {
    'sAMAccountName': '214',
    'givenName': 'Eduardo',
    'sn': 'Ferreira',
    'cn': 'Eduardo Ferreira',
    'displayName': 'Eduardo Ferreira',
    'groups': []
  },
  {
    'sAMAccountName': 'victoria',
    'givenName': 'Victoria',
    'sn': 'Eduarda Rozendo da Silva',
    'cn': 'Victoria Eduarda Rozendo da Silva',
    'displayName': 'Victoria Eduarda Rozendo da Silva',
    'groups': [
      {
        'dn': 'CN=Comercial,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Comercial',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Dksoft,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Dksoft',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Impressao,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Impressao',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Print Operators,CN=Builtin,DC=dinamica,DC=net',
        'cn': 'Print Operators',
        'description': 'Members can administer printers installed on domain controllers',
        'groupType': '-2147483643'
      },
      {
        'dn': 'CN=Professores,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Professores',
        'groupType': '-2147483646'
      }
    ]
  },
  {
    'sAMAccountName': '215',
    'givenName': 'Beatriz',
    'sn': 'Barbosa',
    'cn': 'Beatriz Barbosa',
    'displayName': 'Beatriz Barbosa',
    'groups': []
  },
  {
    'sAMAccountName': 'leandro',
    'givenName': 'Leandro',
    'sn': 'Vitor Rafael',
    'cn': 'Leandro Vitor Rafael',
    'displayName': 'Leandro Vitor Rafael',
    'groups': [
      {
        'dn': 'CN=Print Operators,CN=Builtin,DC=dinamica,DC=net',
        'cn': 'Print Operators',
        'description': 'Members can administer printers installed on domain controllers',
        'groupType': '-2147483643'
      },
      {
        'dn': 'CN=Professores,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Professores',
        'groupType': '-2147483646'
      },
      {
        'dn': 'CN=Vnc,OU=Groups,DC=dinamica,DC=net',
        'cn': 'Vnc',
        'groupType': '-2147483646'
      }
    ]
  },
  {
    'sAMAccountName': '216',
    'givenName': 'Leticia',
    'sn': 'Montoro',
    'cn': 'Leticia Montoro',
    'groups': []
  },
  {
    'sAMAccountName': '218',
    'givenName': 'Karina',
    'sn': 'Santos',
    'cn': 'Karina Santos',
    'groups': []
  },
  {
    'sAMAccountName': '217',
    'givenName': 'Adrielle',
    'sn': 'Cicatti',
    'cn': 'Adrielle Cicatti',
    'groups': []
  },
  {
    'sAMAccountName': 'adriano',
    'givenName': 'Adriano',
    'sn': 'Nascimento da Silva Santos',
    'cn': 'Adriano Nascimento da Silva Santos',
    'displayName': 'Adriano Nascimento da Silva Santos',
    'groups': []
  },
  {
    'sAMAccountName': '219',
    'givenName': 'Melissa',
    'sn': 'Martins',
    'cn': 'Melissa Martins',
    'groups': []
  }
];